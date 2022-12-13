import React from "react";
import { useReduxDispatch } from "src/redux/redux-hook";
import "./AccountManager.scss";
import { UserAccount, UserType } from "src/types/Type";
import { ColumnCommon, TableCommon } from "src/common";
import AccountActions from "./AccountActions/AccountActions";
import useGetAccountList from "./../../hooks/useGetAccountList";
import { UserAccountWithUserType } from "src/types/CombineType";

type Props = {};

const AccountManager = (props: Props) => {
	const { accountList, accountListStatus } = useGetAccountList();
	return (
		<div>
			<div className="dashboard-title">Account Type Manager</div>
			<TableCommon<UserAccountWithUserType>
				dataSource={accountList}
				rowKey="id"
				loading={accountListStatus === "loading"}
				// tableLayout="auto"
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

export default AccountManager;
