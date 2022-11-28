import { Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import React from "react";
import { TableCommon } from "src/common";
interface DataType {
	key: string;
	name: string;
	cv: string;
	time: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		// render: (text) => <a>{text}</a>,
	},
	{
		title: "CV",
		dataIndex: "cv",
		key: "cv",
	},
	{
		title: "Time",
		dataIndex: "time",
		key: "time",
	},
	{
		title: "Action",
		key: "action",
		width: 300,
		render: (_, record) => (
			<Space size="middle">
				<div>Delete</div>
			</Space>
		),
	},
];
const data: DataType[] = [
	{
		key: "1",
		name: "Job 1",
		cv: "Cv 1",
		time: "now",
	},
	{
		key: "2",
		name: "job 2",
		cv: "cv 2",
		time: "now",
	},
	{
		key: "3",
		name: "job 3",
		cv: "cv 3",
		time: "now",
	},
];

type Props = {};

const AppliedJobs = (props: Props) => {
	return (
		<div className="applied-jobs">
			<div className="dashboard-title">Applied Job</div>
			<div className="inner-content">
				<TableCommon columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default AppliedJobs;
