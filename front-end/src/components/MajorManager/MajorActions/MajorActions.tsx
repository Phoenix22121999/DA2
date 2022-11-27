import React from "react";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import TooltipCommon from "src/components/TooltipCommon/TooltipCommon";
import { Majors } from "src/types/Type";
import { ToolOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteMajor } from "src/redux/slice/MajorSlide";
import { useReduxDispatch } from "src/redux/redux-hook";
import PopconfirmCommon from "src/components/PopconfirmCommon/PopconfirmCommon";

type Props = {
	record: Majors;
	handleRenameClick: (record: Majors) => void;
};

const AccountTypeActions = ({ handleRenameClick, record }: Props) => {
	const dispatch = useReduxDispatch();

	const onDeleteConfirm = () => {
		dispatch(deleteMajor({ payload: { majors_id: record.id } }));
	};

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

			<PopconfirmCommon
				title="Are you sure to delete this major"
				onConfirm={onDeleteConfirm}
			>
				<TooltipCommon title="Delete">
					<ButtonCommon
						size="small"
						icon={<DeleteOutlined />}
						type="secondary"
					/>
				</TooltipCommon>
			</PopconfirmCommon>
		</div>
	);
};

export default AccountTypeActions;
