import { message } from "antd";
import React, { useState } from "react";
import { SwitchCommon } from "src/common";
import { useReduxDispatch } from "src/redux/redux-hook";
import { updatePost } from "src/redux/slice/PostSlide";
import { RecruitmentPost } from "src/types/Type";
import { CallbackFunction } from "src/types/UtilType";

type Props = {
	record: RecruitmentPost;
	isDisabled?: boolean;
};

const ToggleAction = ({ record, isDisabled = false }: Props) => {
	const dispatch = useReduxDispatch();
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState(record.is_active);
	const callback: CallbackFunction = (isSuccess) => {
		setLoading(false);
		if (isSuccess) {
			message.success("Active post success");
		} else {
			setChecked(!checked);
			message.error("Active post fail");
		}
	};
	const onChange = (value: boolean) => {
		setLoading(true);
		setChecked(value);
		dispatch(
			updatePost({
				payload: {
					post_id: record.id,
					is_active: value,
				},
				callback,
			})
		);
	};

	return (
		<SwitchCommon
			checked={checked}
			onChange={onChange}
			loading={loading}
			disabled={isDisabled}
		/>
	);
};

export default ToggleAction;
