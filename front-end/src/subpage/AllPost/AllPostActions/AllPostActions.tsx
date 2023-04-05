import React from "react";
import { RecruitmentPost } from "src/types/Type";
import { EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { ButtonCommon, TooltipCommon } from "src/common";

type Props = {
	record: RecruitmentPost;
};

const AllPostActions = ({ record }: Props) => {
	const navigate = useNavigate();

	const onEditClick = () => {
		navigate(ROUTE.ADMIN_POST_DETAIL + "/" + record.id);
	};

	return (
		<div className="job-action">
			<TooltipCommon title="View">
				<ButtonCommon
					icon={<EyeOutlined />}
					type="info"
					onClick={onEditClick}
				/>
			</TooltipCommon>
		</div>
	);
};

export default AllPostActions;
