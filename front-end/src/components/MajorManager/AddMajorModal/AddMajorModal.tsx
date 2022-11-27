import { Form, message } from "antd";
import React from "react";
import { useReduxDispatch } from "src/redux/redux-hook";
import { createMajor } from "src/redux/slice/MajorSlide";
import { CallbackFunction } from "src/types/UtilType";
import InputCommon from "src/components/InputCommon/InputCommon";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { CreateMajorParameters } from "src/types/MajorType";

type Props = {
	onClose: () => void;
};

const AddMajorModal = ({ onClose }: Props) => {
	const [form] = Form.useForm<CreateMajorParameters>();
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
			createMajor({
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
					label="Major name"
					name={"majors_name"}
					rules={[
						{
							required: true,
							message: "Please input name for major",
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

export default AddMajorModal;
