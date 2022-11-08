import React from "react";
import "./JobManager.scss";
import TableCommon from "./../TableCommon/TableCommon";
import { ColumnsType } from "antd/lib/table";
import { Space } from "antd";
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
const data: DataType[] = [
	{
		key: "1",
		name: "Job 1",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
		category: "marketing",
	},
	{
		key: "2",
		name: "Job 2",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
		category: "marketing",
	},
	{
		key: "3",
		name: "Job 3",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
		category: "marketing",
	},
];

const JobManager = (props: Props) => {
	return (
		<div className="Job-manager">
			<div className="dashboard-title">Job Manager</div>
			<div className="inner-content">
				<TableCommon columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default JobManager;
