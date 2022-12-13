import React, { useEffect, useState } from "react";
import "./JobManager.scss";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListPostByUser, selectPostList } from "src/redux/slice/PostSlide";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import JobActions from "./JobActions/JobActions";
import { RecruitmentPost } from "src/types/Type";
import { ButtonCommon, TableCommon } from "src/common";
import { ColumnCommon } from "src/common/TableCommon/TableCommon";
type Props = {
	isHideAdd?: boolean;
	isHideTitle?: boolean;
	isHideAction?: boolean;
	isUseCustomData?: boolean;
	customData?: RecruitmentPost[];
};

const JobManager = ({
	isHideAction = false,
	isHideAdd = false,
	isHideTitle = false,
	isUseCustomData = false,
	customData = [],
}: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectPostList);
	const navigate = useNavigate();
	const [first, setFirst] = useState(true);
	useEffect(() => {
		if (isUseCustomData) {
			return;
		}
		if (postList) {
			if (first && postList.length < 1) {
				dispatch(getListPostByUser({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, postList, isUseCustomData]);

	const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(ROUTE.RECRUITER_POST_NEW_JOB);
	};

	return (
		<div className="job-manager">
			{!isHideTitle && (
				<div className="dashboard-title">Post Manager</div>
			)}
			{!isHideAdd && (
				<div className="button-add-action">
					<ButtonCommon size="small" onClick={onAddClick}>
						Add new job
					</ButtonCommon>
				</div>
			)}
			<div className="inner-content">
				<TableCommon
					dataSource={isUseCustomData ? customData : postList}
					rowKey="id"
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
						render={(value: string) => {
							const event = new Date(value);

							return (
								<div>{event.toLocaleDateString("vi-VI")}</div>
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
