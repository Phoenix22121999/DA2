import React from "react";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import TooltipCommon from "src/components/TooltipCommon/TooltipCommon";
import { UserType } from "src/types/Type";
import { ToolOutlined } from "@ant-design/icons";

type Props = {
	record: UserType;
	handleRenameClick: (record: UserType) => void;
};

const AccountTypeActions = ({ handleRenameClick, record }: Props) => {
	// const dispatch = useReduxDispatch();

	// const onDeleteConfirm = () => {
	// 	dispatch(delete({ payload: { id_cv: record.id } }));
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

			{/* <PopconfirmCommon
				title="Are you sure to delete this cv"
				onConfirm={onDeleteConfirm}
			>
				<TooltipCommon title="Delete">
					<ButtonCommon
						size="small"
						icon={<DeleteOutlined />}
						type="secondary"
					/>
				</TooltipCommon>
			</PopconfirmCommon> */}
		</div>
	);
};

export default AccountTypeActions;
