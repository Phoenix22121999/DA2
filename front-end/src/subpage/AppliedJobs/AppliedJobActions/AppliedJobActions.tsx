import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "src/redux/redux-hook";
import { ButtonCommon, PopconfirmCommon, TooltipCommon } from "src/common";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import { unApplyCV } from "src/redux/slice/ApplySlide";

type Props = {
	record: DetailHistoryApplyJob;
};

const AppliedJobActions = ({ record }: Props) => {
	const dispatch = useReduxDispatch();

	const onDeleteConfirm = () => {
		dispatch(
			unApplyCV({
				payload: {
					post_id: record.post_id,
					cv_id: record.cv_id,
				},
			})
		);
	};

	return (
		<div className="buttons-action">
			<PopconfirmCommon
				title="Are you sure to withdraw"
				onConfirm={onDeleteConfirm}
			>
				<TooltipCommon title="Withdraw">
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

export default AppliedJobActions;
