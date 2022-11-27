import { Form, message } from "antd";
import React from "react";
import { useReduxDispatch } from "src/redux/redux-hook";
import { createJobType } from "src/redux/slice/JobTypeSlide";
import { CallbackFunction } from "src/types/UtilType";
import InputCommon from "src/components/InputCommon/InputCommon";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { CreateJobTypeParameters } from "src/types/JobTypeType";

type Props = {
	onClose: () => void;
};

const AddJobTypeModal = ({ onClose }: Props) => {
	const [form] = Form.useForm<CreateJobTypeParameters>();
	const dispatch = useReduxDispatch();
	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Create job type success");
		} else {
			message.error("Create job type fail");
		}
		form.resetFields();
		onClose();
	};
	const handleOnclose = () => {
		form.resetFields();
		onClose();
	};
	const onAdd = async () => {
		const value = await form.validateFields();

		dispatch(
			createJobType({
				payload: value,
				callback,
			})
		);
	};

	return (
		<div>
			{" "}
			<Form form={form} layout="vertical">
				<Form.Item
					label="Job type name"
					name={"job_type_name"}
					rules={[
						{
							required: true,
							message: "Please input name for job type",
						},
					]}
				>
					<InputCommon />
				</Form.Item>
			</Form>
			<div className="button-form">
				<ButtonCommon onClick={handleOnclose} size="small" type="info">
					close
				</ButtonCommon>
				<ButtonCommon onClick={onAdd} size="small">
					Add CV
				</ButtonCommon>
			</div>{" "}
		</div>
	);
};

export default AddJobTypeModal;
