import { Form, message } from "antd";
import React from "react";
import { ChangePasswordParameters } from "src/types/AuthType";
import { useReduxDispatch } from "../../redux/redux-hook";
import { changePasswordAction } from "../../redux/slice/UserSilce";
import { CallbackFunction } from "src/types/UtilType";
import { ButtonCommon, FormCommon, InputPasswordCommon } from "src/common";
import SuspenseLoading from "../../components/SuspenseLoading/SuspenseLoading";

type Props = {};

const ChangePassword = (props: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const callback: CallbackFunction<null> = (isSuccess) => {
		if (isSuccess) {
			message.success("Change password success");
		}
		form.resetFields();
	};
	const onChangePassword = async () => {
		const value = await form.validateFields();
		const payload: ChangePasswordParameters = {
			new_password: value.new_password,
			current_password: value.password,
		};
		dispatch(changePasswordAction({ payload, callback }));
	};
	return (
		<div className="change-password">
			<div className="dashboard-title">Change Password</div>
			<div className="inner-content">
				<React.Suspense fallback={<SuspenseLoading size="medium" />}>
					<div className="profile=form">
						<FormCommon form={form} layout="vertical">
							<Form.Item
								label="Old Password"
								name="password"
								rules={[
									{
										required: true,
										message: "This field is required",
									},
								]}
							>
								<InputPasswordCommon />
							</Form.Item>
							<Form.Item
								dependencies={["password"]}
								label="Password"
								name={"new_password"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please confirm your password!",
									},
									({ getFieldValue }) => ({
										validator(_, value) {
											if (
												!value ||
												getFieldValue("password") !==
													value
											) {
												return Promise.resolve();
											}
											return Promise.reject(
												new Error(
													"The new password must not be the same as old password"
												)
											);
										},
									}),
								]}
							>
								<InputPasswordCommon />
							</Form.Item>
							<Form.Item
								label="Confirm Password"
								name={"confirmPassword"}
								dependencies={["new_password"]}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please confirm your password!",
									},
									({ getFieldValue }) => ({
										validator(_, value) {
											if (
												!value ||
												getFieldValue(
													"new_password"
												) === value
											) {
												return Promise.resolve();
											}
											return Promise.reject(
												new Error(
													"The two passwords that you entered do not match!"
												)
											);
										},
									}),
								]}
							>
								<InputPasswordCommon />
							</Form.Item>
						</FormCommon>
						<div className="button-form">
							<ButtonCommon
								size="small"
								onClick={onChangePassword}
							>
								Submit
							</ButtonCommon>
						</div>
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default ChangePassword;
