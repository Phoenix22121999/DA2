import React from "react";
import { UserType } from "src/types/Type";
import { ToolOutlined } from "@ant-design/icons";
import { ButtonCommon, TooltipCommon } from "src/common";

type Props = {
	record: UserType;
	handleRenameClick: (record: UserType) => void;
};

const AccountTypeActions = ({ handleRenameClick, record }: Props) => {
	// const dispatch = useReduxDispatch();

	// const onDeleteConfirm = () => {
	// 	dispatch(delete({ payload: { cv_id: record.id } }));
	// };

	const onRenameClick = () => {
		handleRenameClick(record);
	};

	return (
		<div className="buttons-action">
			<TooltipCommon title="Rename">
				<ButtonCommon
					size="small"
					icon={<ToolOutlined />}
					type="info"
					onClick={onRenameClick}
				/>
			</TooltipCommon>
		</div>
	);
};

export default AccountTypeActions;
