import { Form, message } from "antd";
import {
	FormCommon,
	InputCommon,
	FormItemCommon,
	ButtonCommon,
	InputPasswordCommon,
} from "src/common";
import "./ForgotPassword.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	resetPassword,
	sendForgotPasswordMail,
} from "src/redux/slice/PasswordSilce";
import { CallbackFunction } from "src/types/UtilType";
import { ROUTE } from "src/utils/contants";
type ForgotPasswordProps = {};
const ForgotPassword = (props: ForgotPasswordProps) => {
	const [form] = Form.useForm();
	const [isLoading, setIsLoading] = useState(false);
	const [isSended, setIsSended] = useState(false);
	const [searchParams] = useSearchParams();
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();
	const callback: CallbackFunction = (isSuccess) => {
		setIsLoading(false);
		if (isSuccess) {
			setIsSended(true);
			if (token) {
				navigate(ROUTE.SIGN_IN);
			} else {
				message.success("Please check your mail");
			}
		} else {
			message.error("something went wrong, please try again later");
		}
	};
	const onSubmitEmail = async () => {
		try {
			let values = await form.validateFields();
			dispatch(
				sendForgotPasswordMail({
					payload: {
						user_name: values.username,
						email: values.email,
					},
					callback,
				})
			);
		} catch (error) {
			console.log(error);
		}
	};
	const onChangePassword = async () => {
		try {
			let values = await form.validateFields();
			dispatch(
				resetPassword({
					payload: {
						new_password: values.new_password,
						token: token!,
					},
					callback,
				})
			);
		} catch (error) {
			console.log(error);
		}
	};
	const token = useMemo(() => searchParams.get("token"), [searchParams]);

	return (
		<div className="forgot-password-page">
			<div className="forgot-password-warper">
				<div className="forgot-password-page-inner">
					{!token ? (
						<>
							<FormCommon form={form} layout="vertical">
								<FormItemCommon
									label="Username"
									name="username"
									rules={[
										{
											required: true,
											message: "Please input username",
										},
									]}
								>
									<InputCommon />
								</FormItemCommon>
								<FormItemCommon
									label="Email"
									name="email"
									rules={[
										{
											required: true,
											message: "Please input username",
										},
									]}
								>
									<InputCommon />
								</FormItemCommon>
							</FormCommon>
							<div className="button-sign-in">
								<ButtonCommon
									loading={isLoading}
									disabled={isSended}
									onClick={onSubmitEmail}
									size="small"
								>
									{isSended ? "Sended" : "Send Email"}
								</ButtonCommon>
							</div>
						</>
					) : (
						<>
							<FormCommon form={form} layout="vertical">
								<Form.Item
									dependencies={["password"]}
									label="New Password"
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
													getFieldValue(
														"password"
													) !== value
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
									loading={isLoading}
									size="small"
									onClick={onChangePassword}
								>
									Submit
								</ButtonCommon>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};
export default ForgotPassword;
