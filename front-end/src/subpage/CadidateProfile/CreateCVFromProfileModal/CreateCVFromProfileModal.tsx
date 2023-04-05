import { Form, message } from "antd";
import React, { useState } from "react";
import { ButtonCommon, FormCommon, InputCommon } from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { useReduxDispatch } from "src/redux/redux-hook";
import { createCVFromProfile } from "src/redux/slice/CVSlide";
import { CallbackFunction } from "src/types/UtilType";

type CreateCVFromProfileModalProps = {
	onClose: () => void;
};
const CreateCVFromProfileModal = ({
	onClose,
}: CreateCVFromProfileModalProps) => {
	const [loading, setLoading] = useState(false);
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const handleOnclose = () => {
		form.resetFields();
		onClose();
	};
	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Create cv success");
		} else {
			message.error("Create cv fail");
		}
		form.resetFields();
		onClose();
		setLoading(false);
	};
	const onAdd = async () => {
		try {
			setLoading(true);
			const value = await form.validateFields();
			dispatch(
				createCVFromProfile({
					payload: {
						name_cv: value.name,
					},
					callback,
				})
			);
		} catch (error) {
			setLoading(false);
		}
	};
	return (
		<div>
			<React.Suspense fallback={<SuspenseLoading size="medium" />}>
				<div className="add-cv-modal">
					<FormCommon form={form} layout="vertical">
						<Form.Item
							label="CV name"
							name={"name"}
							rules={[
								{
									required: true,
									message: "Please input name for CV",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
					</FormCommon>
					<div className="button-form">
						<ButtonCommon
							onClick={handleOnclose}
							size="small"
							type="info"
						>
							Close
						</ButtonCommon>
						<ButtonCommon
							onClick={onAdd}
							size="small"
							loading={loading}
						>
							Create CV
						</ButtonCommon>
					</div>
				</div>
			</React.Suspense>
		</div>
	);
};
export default CreateCVFromProfileModal;
