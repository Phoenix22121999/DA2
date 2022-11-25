import React, { useEffect } from "react";
import "./JobManager.scss";
import TableCommon, { ColumnCommon } from "./../TableCommon/TableCommon";
import { ColumnsType } from "antd/lib/table";
import { Space } from "antd";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListPostByUser, selectPostList } from "src/redux/slice/PostSlide";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
type Props = {};

interface DataType {
	key: string;
	name: string;
	description: string;
	category: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		// render: (text) => <a>{text}</a>,
	},
	{
		title: "Description",
		dataIndex: "description",
		key: "description",
	},
	{
		title: "Category",
		dataIndex: "category",
		key: "category",
	},
	{
		title: "Action",
		key: "action",
		width: 300,
		render: (_, record) => (
			<Space size="middle">
				<div>Edit</div>
				<div>Delete</div>
			</Space>
		),
	},
];

const JobManager = (props: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectPostList);
	const navigate = useNavigate();
	useEffect(() => {
		if (!postList) {
			dispatch(getListPostByUser({}));
		}
	}, [dispatch, postList]);

	const onAddClick = (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		navigate(ROUTE.RECRUITER_POST_NEW_JOB);
	};

	return (
		<div className="Job-manager">
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
						dataIndex="file_name"
						key="file_name"
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
					<ColumnCommon<CV>
						title="Action"
						key="action"
						width={"30%"}
						render={(_, record) => {
							return (
								<CVActions
									record={record}
									handleRenameClick={handleRenameClick}
									handleViewPdf={handleViewPdf}
								/>
							);
						}}
					/>
				</TableCommon>
			</div>
		</div>
	);
};

export default JobManager;
