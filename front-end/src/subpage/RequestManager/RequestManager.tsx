import React from "react";
import "./RequestManager.scss";
import { ColumnCommon, InputSearchCommon, TableCommon } from "src/common";
import AccountActions from "./AccountActions/AccountActions";
import { UserAccountWithUserType } from "src/types/CombineType";
import useGetUnActiveAccountList from "src/hooks/useGetUnActiveAccountList";

type Props = {};

const RequestManager = (props: Props) => {
	const { accountList, total, onChangePagination, onSearch, page } =
		useGetUnActiveAccountList();
	return (
		<div>
			<div className="dashboard-title">Request Manager</div>
			<div className="dashboard-sub-title">
				<div className="total-number">Total Request: {total}</div>
				<div>
					<InputSearchCommon
						onSearch={onSearch}
						allowClear
						placeholder="Search by title"
					/>
				</div>
			</div>
			<TableCommon<UserAccountWithUserType>
				dataSource={accountList}
				rowKey="id"
				pagination={{
					total: total,
					onChange: onChangePagination,
					current: page,
				}}
			>
				<ColumnCommon
					title="Username"
					dataIndex="username"
					key="username"
					// width={"30%"}
					// ellipsis
					render={(value: string) => {
						return <div className="table-username">{value}</div>;
					}}
				/>
				<ColumnCommon
					title="User Type"
					dataIndex={["user_type", "user_type_name"]}
					key="user_type_name"
				/>
				<ColumnCommon
					title="Create Date"
					dataIndex="create_date"
					key="create_date"
					responsive={["md"]}
					render={(value: string) => {
						const event = new Date(value);

						return <div>{event.toLocaleDateString("vi-VI")}</div>;
					}}
				/>
				<ColumnCommon<UserAccountWithUserType>
					title="Action"
					key="action"
					// width={"10%"}
					render={(_, record) => {
						return <AccountActions record={record} />;
					}}
				/>
			</TableCommon>
		</div>
	);
};

export default RequestManager;
