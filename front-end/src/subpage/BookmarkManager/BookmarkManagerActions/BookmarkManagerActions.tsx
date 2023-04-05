import React, { useState } from "react";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "src/redux/redux-hook";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { ButtonCommon, PopconfirmCommon, TooltipCommon } from "src/common";
import { DetailRecruitmentPostUserLike } from "src/types/CombineType";
import { message } from "antd";
import { unBookmark } from "src/redux/slice/BookmarkSlide";

type Props = {
	record: DetailRecruitmentPostUserLike;
};

const BookmarkManagerActions = ({ record }: Props) => {
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);

	const onViewClick = () => {
		navigate(`${ROUTE.POST_DETAIL}${record.post_id}`);
	};

	const callback = (isSuccess: boolean) => {
		if (isSuccess) {
			message.success("un bookmark successfull");
		} else {
			message.error("un bookmark fail");
		}
		setIsLoading(false);
	};
	const onUnbookmarkConfirm = () => {
		dispatch(
			unBookmark({
				payload: {
					post_id: record.post_id,
				},
				callback,
			})
		);
	};
	return (
		<div className="job-action">
			<PopconfirmCommon
				title="Are you sure to unbookmark this post"
				onConfirm={onUnbookmarkConfirm}
			>
				<TooltipCommon title="Un bookmark">
					<ButtonCommon
						loading={isLoading}
						size="small"
						type={"outstanding"}
						icon={<HeartOutlined />}
					/>
				</TooltipCommon>
			</PopconfirmCommon>
			<TooltipCommon title="view">
				<ButtonCommon
					loading={isLoading}
					onClick={onViewClick}
					size="small"
					type={"secondary"}
					icon={<EyeOutlined />}
				/>
			</TooltipCommon>
		</div>
	);
};

export default BookmarkManagerActions;
