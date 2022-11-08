import React from "react";
import "./CVManager.scss";
import TableCommon from "./../TableCommon/TableCommon";
import { ColumnsType } from "antd/lib/table";
import { Space } from "antd";
type Props = {};

interface DataType {
	key: string;
	name: string;
	description: string;
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
		name: "CV 1",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
	},
	{
		key: "2",
		name: "CV 2",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
	},
	{
		key: "3",
		name: "CV 3",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem?",
	},
];

const CVManager = (props: Props) => {
	return (
		<div className="cv-manager">
			<div className="dashboard-title">CV Manager</div>
			<div className="inner-content">
				<TableCommon columns={columns} dataSource={data} />
			</div>
		</div>
	);
};

export default CVManager;
