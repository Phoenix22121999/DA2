import React from "react";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import TooltipCommon from "src/components/TooltipCommon/TooltipCommon";
import { CV } from "src/types/Type";
import { ToolOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import PopconfirmCommon from "./../../PopconfirmCommon/PopconfirmCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { deleteCV } from "src/redux/slice/CVSlide";

type Props = {
	record: CV;
	handleRenameClick: (record: CV) => void;
	handleViewPdf: (record: CV) => void;
};

const CVActions = ({ handleRenameClick, record, handleViewPdf }: Props) => {
	const dispatch = useReduxDispatch();

	const onDeleteConfirm = () => {
		dispatch(deleteCV({ payload: { id_cv: record.id } }));
	};

	const onRenameClick = () => {
		handleRenameClick(record);
	};

	const onViewClick = () => {
		handleViewPdf(record);
	};

	return (
		<div className="cv-action">
			<TooltipCommon title="Rename">
				<ButtonCommon
					size="small"
					icon={<ToolOutlined />}
					type="info"
					onClick={onRenameClick}
				/>
			</TooltipCommon>

			<PopconfirmCommon
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
			</PopconfirmCommon>
			<TooltipCommon title="View">
				<ButtonCommon
					size="small"
					icon={<EyeOutlined />}
					type="success"
					onClick={onViewClick}
				/>
			</TooltipCommon>
		</div>
	);
};

export default CVActions;
