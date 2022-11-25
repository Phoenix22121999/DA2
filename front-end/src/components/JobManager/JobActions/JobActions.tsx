import React from "react";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import TooltipCommon from "src/components/TooltipCommon/TooltipCommon";
import { CV, RecruitmentPost } from "src/types/Type";
import { ToolOutlined, DeleteOutlined } from "@ant-design/icons";
import PopconfirmCommon from "../../PopconfirmCommon/PopconfirmCommon";

type Props = {
	record: RecruitmentPost;
};

const JobActions = ({ record }: Props) => {
	// const dispatch = useReduxDispatch();

	const onDeleteConfirm = () => {
		// dispatch(deleteCV({ payload: { id_cv: record.id } }));
	};

	const onEditClick = () => {
		console.log(record);
	};

	return (
		<div className="cv-action">
			<TooltipCommon title="Edit">
				<ButtonCommon
					size="small"
					icon={<ToolOutlined />}
					type="info"
					onClick={onEditClick}
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
		</div>
	);
};

export default JobActions;
