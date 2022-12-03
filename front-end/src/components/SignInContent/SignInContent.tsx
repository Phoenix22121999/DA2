import { Checkbox, Form, message } from "antd";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import {
	GoogleLoginResponse,
	GoogleLoginResponseOffline,
} from "react-google-login";
import { useNavigate } from "react-router-dom";
import {
	ButtonCommon,
	FormCommon,
	InputCommon,
	InputPasswordCommon,
} from "src/common";
import { useGoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useReduxDispatch } from "src/redux/redux-hook";
import { signIn } from "src/redux/slice/UserSilce";
import { BaseReponseType } from "src/types/ApiType";
import { AuthUser } from "src/types/AuthType";
import { COOKIES_NAME, GGAPI_TDTU } from "src/utils/contants";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
import "./SignInContent.scss";
import { GGAPI_NORMAL } from "./../../utils/contants";
import { checkIsTDTEmail } from "src/utils/function";
type Props = {};
type SignUpForm = {
	user_name: string;
	password: string;
	remember: boolean;
};
const SignInContent = (props: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const [, setCookies] = useCookies([
		COOKIES_NAME.ACCESS_TOKEN,
		COOKIES_NAME.USER,
	]);
	const natigate = useNavigate();

	const loginWithNormalGGSuccess = (
		response: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		console.log(response);
		if ("code" in response) {
			message.error("Sign in fail");
			return;
		}
		console.log(checkIsTDTEmail(response.profileObj.email));
	};

	const loginWithTDTGGSuccess = (
		response: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		console.log(response);
		if ("code" in response) {
			message.error("Sign in fail");
			return;
		}
		console.log(checkIsTDTEmail(response.profileObj.email));
	};

	const loginWithGGFail = (res: any) => {
		console.log(res);
		message.error("Sign in fail");
	};

	const { signIn: ggSignIn, loaded } = useGoogleLogin({
		clientId: GGAPI_NORMAL || "",
		onSuccess: loginWithNormalGGSuccess,
		onFailure: loginWithGGFail,
		cookiePolicy: "single_host_origin",
	});

	const { signIn: ggSignInTDT } = useGoogleLogin({
		clientId: GGAPI_TDTU || "",
		onSuccess: loginWithTDTGGSuccess,
		onFailure: loginWithGGFail,
		cookiePolicy: "single_host_origin",
	});

	const callback = (isSuccess: boolean, data: BaseReponseType<AuthUser>) => {
		const remember: boolean = form.getFieldValue("agree");
		if (isSuccess) {
			if (remember) {
				var expires = new Date();
				expires.setDate(expires.getDate() + 3);
				setCookies(COOKIES_NAME.ACCESS_TOKEN, data.AccessToken, {
					expires,
				});
				setCookies(COOKIES_NAME.USER, data.data, { expires });
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

	useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: GGAPI_NORMAL,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);
	}, []);

	const onSignInNomal = async () => {
		ggSignIn();
	};

	const onSignInTDT = async () => {
		ggSignInTDT();
	};

	return (
		<div className="sign-in-content">
			<div className="container">
				<React.Suspense fallback={<SuspenseLoading size="medium" />}>
					<div className="sign-in-content-inner">
						<FormCommon form={form} layout="vertical">
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
						</FormCommon>
						<div className="button-sign-in">
							<ButtonCommon onClick={handleSignIn} size="small">
								Sign In
							</ButtonCommon>
						</div>
						<div className="login-with-gg">
							<ButtonCommon onClick={onSignInNomal}>
								Login With TDTU Google Account
							</ButtonCommon>
							<ButtonCommon onClick={onSignInTDT}>
								Login With Nomal Google Account
							</ButtonCommon>
						</div>
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default SignInContent;
