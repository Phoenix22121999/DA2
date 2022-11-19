import { Checkbox, Form, message } from "antd";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "src/redux/redux-hook";
import { signIn } from "src/redux/slice/UserSilce";
import { COOKIES_NAME } from "src/utils/contants";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import InputCommon from "../InputCommon/InputCommon";
import { InputPasswordCommon } from "./../InputCommon/InputCommon";
import "./SignInContent.scss";
type Props = {};
type SignUpForm = {
	user_name: string;
	password: string;
	remember: boolean;
};
const SignInContent = (props: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const [, setCookies] = useCookies([COOKIES_NAME.ACCESS_TOKEN]);
	const natigate = useNavigate();

	const callback = (isSuccess: boolean, data: string | undefined) => {
		const remember: boolean = form.getFieldValue("agree");
		if (isSuccess) {
			if (remember) {
				var expires = new Date();
				expires.setDate(expires.getDate() + 3);
				setCookies(COOKIES_NAME.ACCESS_TOKEN, data, { expires });
			}
			message.success("Sign in success");
			natigate("/");
		} else {
			message.error("Sign in fail, please check again");
		}
	};

	const handleSignIn = async () => {
		const value: SignUpForm = await form.validateFields();

		dispatch(signIn({ payload: value, callback }));
	};
	return (
		<div className="sign-in-content">
			<div className="container">
				<div className="sign-in-content-inner">
					<Form form={form} layout="vertical">
						<Form.Item
							label="Username"
							name={"user_name"}
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
						<Form.Item
							label="Password"
							name={"password"}
							rules={[
								{
									required: true,
									message: "Please input your username!",
								},
							]}
						>
							<InputPasswordCommon />
						</Form.Item>
						<Form.Item name={"agree"} valuePropName="checked">
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Form>
					<div className="button-sign-in">
						<ButtonCommon onClick={handleSignIn} size="small">
							Sign In
						</ButtonCommon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInContent;
