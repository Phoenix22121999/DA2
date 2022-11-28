import React, { useEffect, useState } from "react";
import "./JobManager.scss";
import TableCommon, { ColumnCommon } from "./../TableCommon/TableCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListPostByUser, selectPostList } from "src/redux/slice/PostSlide";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import JobActions from "./JobActions/JobActions";
import { RecruitmentPost } from "src/types/Type";
type Props = {};

const JobManager = (props: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectPostList);
	const navigate = useNavigate();
	const [first, setFirst] = useState(true);
	useEffect(() => {
		if (postList) {
			if (first && postList.length < 1) {
				dispatch(getListPostByUser({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, postList]);

	const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(ROUTE.RECRUITER_POST_NEW_JOB);
	};

	return (
		<div className="job-manager">
			<div className="dashboard-title">Post Manager</div>
			<div>
				<ButtonCommon size="small" onClick={onAddClick}>
					Add new job
				</ButtonCommon>
			</div>
			<div className="inner-content">
				<TableCommon dataSource={postList} rowKey="id">
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
					<ColumnCommon<RecruitmentPost>
						title="Action"
						key="action"
						width={"30%"}
						render={(_, record) => {
							return <JobActions record={record} />;
						}}
					/>
				</TableCommon>
			</div>
		</div>
	);
};

export default JobManager;
