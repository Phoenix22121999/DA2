import React from "react";
import { RecruitmentPost } from "src/types/Type";
import { ToolOutlined, DeleteOutlined } from "@ant-design/icons";
import { setEditPostID } from "src/redux/slice/EditPostSlice";
import { useReduxDispatch } from "src/redux/redux-hook";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { deletePost } from "src/redux/slice/PostSlide";
import { ButtonCommon, PopconfirmCommon, TooltipCommon } from "src/common";

type Props = {
	record: RecruitmentPost;
};

const JobActions = ({ record }: Props) => {
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();

	const onDeleteConfirm = () => {
		dispatch(deletePost({ payload: { post_id: record.id } }));
	};

	const onEditClick = () => {
		dispatch(setEditPostID(record.id));
		navigate(ROUTE.RECRUITER_EDIT_JOB);
	};

	return (
		<div className="job-action">
			<TooltipCommon title="Edit">
				<ButtonCommon
					// size="small"
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
						// size="small"
						icon={<DeleteOutlined />}
						type="secondary"
					/>
				</TooltipCommon>
			</PopconfirmCommon>
		</div>
	);
};

export default JobActions;