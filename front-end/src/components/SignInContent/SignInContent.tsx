import { Checkbox, Form, message } from "antd";
import React from "react";
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
import { useReduxDispatch } from "src/redux/redux-hook";
import { signIn, signInGG } from "src/redux/slice/UserSilce";
import { BaseReponseType } from "src/types/ApiType";
import { COOKIES_NAME } from "src/utils/contants";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
import "./SignInContent.scss";
import { GGAPI_NORMAL } from "./../../utils/contants";
import { checkIsTDTEmail } from "src/utils/function";
import { GoogleLogin } from "react-google-login";
import { UserAccount } from "src/types/Type";
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
		if ("code" in response) {
			message.error("Sign in fail");
			return;
		}
		if (checkIsTDTEmail(response.profileObj.email)) {
			message.error(
				"you are sign in with tdtu google account please choose Sign In With TDT"
			);
			return;
		}
		dispatch(
			signInGG({
				payload: {
					token: response.tokenId,
					googleId: response.googleId,
					is_tdtu: true,
				},
				callback,
			})
		);
	};

	const loginWithTDTGGSuccess = (
		response: GoogleLoginResponse | GoogleLoginResponseOffline
	) => {
		if ("code" in response) {
			message.error("Sign in fail");
			return;
		}
		if (!checkIsTDTEmail(response.profileObj.email)) {
			message.error("Please sign in with TDTU google account");
			return;
		}
		dispatch(
			signInGG({
				payload: {
					token: response.tokenId,
					googleId: response.googleId,
					is_tdtu: true,
				},
				callback,
			})
		);
	};

	const loginWithGGFail = (res: any) => {
		console.log(res);
		message.error("Sign in fail");
	};

	const callback = (
		isSuccess: boolean,
		data: BaseReponseType<UserAccount>
	) => {
		const remember: boolean = form.getFieldValue("agree");
		if (isSuccess) {
			if (remember || data.data?.google_id) {
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

	const onSignInNomal = (renderProps: any) => (
		<ButtonCommon
			onClick={renderProps.onClick}
			disabled={renderProps.disabled}
			size="small"
			type="secondary"
		>
			Sign In With Google
		</ButtonCommon>
	);

	const onSignInTDT = (renderProps: any) => (
		<ButtonCommon
			onClick={renderProps.onClick}
			disabled={renderProps.disabled}
			size="small"
			type="secondary"
		>
			Sign In With TDTU Google Account
		</ButtonCommon>
	);

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
							<GoogleLogin
								clientId={GGAPI_NORMAL}
								buttonText="Login"
								onSuccess={loginWithNormalGGSuccess}
								onFailure={loginWithGGFail}
								cookiePolicy={"single_host_origin"}
								render={onSignInNomal}
							/>
							<GoogleLogin
								clientId={GGAPI_NORMAL}
								buttonText="Login TDT"
								onSuccess={loginWithTDTGGSuccess}
								onFailure={loginWithGGFail}
								cookiePolicy={"single_host_origin"}
								render={onSignInTDT}
							/>
						</div>
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default SignInContent;
