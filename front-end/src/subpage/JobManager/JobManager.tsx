import React, { useEffect, useState } from "react";
import "./JobManager.scss";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getListPostByUser,
	getListPostByUserById,
	selectPostList,
	selectPostTotal,
} from "src/redux/slice/PostSlide";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import JobActions from "./JobActions/JobActions";
import { RecruitmentPost } from "src/types/Type";
import { ButtonCommon, InputSearchCommon, TableCommon } from "src/common";
import { ColumnCommon } from "src/common/TableCommon/TableCommon";
import ToggleAction from "./ToggleAction";
import useEffectOnce from "src/hooks/useEffectOne";
import useUpdateEffect from "src/hooks/useUpdateEffect";
type Props = {
	isHideAdd?: boolean;
	isHideTitle?: boolean;
	isHideAction?: boolean;
	isUseCustomData?: boolean;
	isDisabled?: boolean;
	customData?: RecruitmentPost[];
	userId?: number;
};

const JobManager = ({
	isHideAction = false,
	isHideAdd = false,
	isHideTitle = false,
	isUseCustomData = false,
	isDisabled = false,
	customData = [],
	userId,
}: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectPostList);
	const total = useReduxSelector(selectPostTotal);
	const navigate = useNavigate();
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	useEffectOnce(() => {
		console.log("in");

		if (userId) {
			return;
		}
		if (isUseCustomData) {
			return;
		}
		if (!postList) {
			return;
		}
		if (postList.length < 1) {
			dispatch(
				getListPostByUser({
					payload: {
						page: 1,
						key_word: search,
					},
				})
			);
		}
	});

	useEffect(() => {
		if (userId) {
			dispatch(
				getListPostByUserById({
					payload: {
						user_id: userId,
						page: 1,
						key_word: search,
					},
				})
			);
		}
	}, [userId, dispatch, search]);

	useUpdateEffect(() => {
		if (userId) {
			dispatch(
				getListPostByUserById({
					payload: {
						user_id: userId,
						page,
						key_word: search,
					},
				})
			);
		} else {
			dispatch(
				getListPostByUser({
					payload: {
						page,
						key_word: search,
					},
				})
			);
		}
	}, [search, dispatch, page, userId]);

	const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(ROUTE.RECRUITER_POST_NEW_JOB);
	};

	const onSearch = (value: string) => {
		setSearch(value);
	};

	const onChangePagination = (page: number, pageSize: number) => {
		setPage(page);
	};

	return (
		<div className="job-manager">
			{!isHideTitle && (
				<div className="dashboard-title">Post Manager</div>
			)}

			<div className="dashboard-sub-title">
				<div className="total-number">Total post: {total}</div>
				<div>
					<InputSearchCommon
						onSearch={onSearch}
						allowClear
						placeholder="Search by title"
					/>
				</div>
				{!isHideAdd && (
					<div className="button-add-action">
						<ButtonCommon size="small" onClick={onAddClick}>
							Add new job
						</ButtonCommon>
					</div>
				)}
			</div>
			<div className="inner-content">
				<TableCommon<RecruitmentPost>
					dataSource={isUseCustomData ? customData : postList}
					rowKey="id"
					pagination={{
						total: total,
						onChange: onChangePagination,
						current: page,
					}}
				>
					<ColumnCommon
						title="Post Title"
						dataIndex="title"
						key="title"
					/>
					<ColumnCommon
						title="Create Date"
						dataIndex="create_date"
						key="create_date"
						responsive={["lg"]}
						render={(value: string) => {
							const event = new Date(value);

							return (
								<div>{event.toLocaleDateString("vi-VI")}</div>
							);
						}}
					/>
					<ColumnCommon<RecruitmentPost>
						title="Active"
						dataIndex="is_active"
						key="is_active"
						responsive={["lg"]}
						render={(_, record) => {
							return (
								<ToggleAction
									record={record}
									isDisabled={isDisabled}
								/>
							);
						}}
					/>
					{!isHideAction && (
						<ColumnCommon<RecruitmentPost>
							title="Action"
							key="action"
							width={"30%"}
							render={(_, record) => {
								return <JobActions record={record} />;
							}}
						/>
					)}
				</TableCommon>
			</div>
		</div>
	);
};

export default JobManager;
