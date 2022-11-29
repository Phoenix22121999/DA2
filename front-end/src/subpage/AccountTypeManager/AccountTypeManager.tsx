import React, { useState, useEffect } from "react";
import { useModal } from "src/hooks/useModal";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getListAccountType,
	selectAccountTypeList,
} from "src/redux/slice/AccountTypeSlide";
import { UserType } from "src/types/Type";
import AccountTypeActions from "./AccountTypeActions/AccountTypeActions";
import RenameAccountTypeModal from "./RenameAccountTypeModal/RenameAccountTypeModal";
import { selectAccountTypeStatus } from "../../redux/slice/AccountTypeSlide";
import { ColumnCommon, ModalCommon, TableCommon } from "src/common";

type Props = {};

const AccountTypeManager = (props: Props) => {
	const {
		isOpen: isRenameOpen,
		close: renameClose,
		open: renameOpen,
	} = useModal(false);
	const [edited, setEdited] = useState<UserType>();
	const [first, setFirst] = useState(true);

	const handleRenameClick = (record: UserType) => {
		setEdited(record);
		renameOpen();
	};
	const dispatch = useReduxDispatch();
	const accountTypeList = useReduxSelector(selectAccountTypeList);
	const accountTypeStatus = useReduxSelector(selectAccountTypeStatus);

	useEffect(() => {
		if (first) {
			if (accountTypeList.length === 0) {
				dispatch(getListAccountType({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, accountTypeList]);

	return (
		<div>
			<div className="dashboard-title">Account Type Manager</div>
			<TableCommon<UserType>
				dataSource={accountTypeList}
				rowKey="id"
				loading={accountTypeStatus === "loading"}
			>
				<ColumnCommon
					title="Type Name"
					dataIndex="user_type_name"
					key="user_type_name"
				/>
				<ColumnCommon
					title="Create Date"
					dataIndex="create_date"
					key="create_date"
					render={(value: string) => {
						const event = new Date(value);

						return <div>{event.toLocaleDateString("vi-VI")}</div>;
					}}
				/>
				<ColumnCommon<UserType>
					title="Action"
					key="action"
					width={"10%"}
					render={(_, record) => {
						return (
							<AccountTypeActions
								record={record}
								handleRenameClick={handleRenameClick}
							/>
						);
					}}
				/>
			</TableCommon>
			<ModalCommon
				centered
				open={isRenameOpen}
				onCancel={renameClose}
				footer={null}
			>
				<RenameAccountTypeModal onClose={renameClose} edited={edited} />
			</ModalCommon>
		</div>
	);
};

export default AccountTypeManager;
