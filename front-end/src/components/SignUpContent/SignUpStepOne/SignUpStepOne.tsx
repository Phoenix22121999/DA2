import React from "react";
import { Checkbox, Form } from "antd";

import "./SignUpStepOne.scss";
import InputCommon, {
	InputPasswordCommon,
} from "./../../InputCommon/InputCommon";
import SelectCommon from "src/components/SelectCommon/SelectCommon";
import ButtonCommon from "./../../ButtonCommon/ButtonCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	nextSignUpStep,
	selectSignUpData,
	updateSignUp,
} from "src/redux/slice/SignUp";
import { OptionalSignUpParameters } from "src/types/AuthType";
import { USER_TYPE_OPTION } from "src/utils/contants";
type Props = {};
type SignUpStepOneForm = {
	user_name: string;
	password: string;
	confirmPassword: string;
	user_type_id: number;
	agree: boolean;
};
const SignUpStepOne = (props: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const data = useReduxSelector(selectSignUpData);

	const next = async () => {
		const value: SignUpStepOneForm = await form.validateFields();
		if (value.password !== value.confirmPassword) {
			form.setFields([
				{
					name: "confirmPassword",
					errors: ["password not match"],
				},
			]);
		}
		const payload: OptionalSignUpParameters = {
			username: value.user_name,
			password: value.password,
			user_type_id: value.user_type_id,
		};
		dispatch(updateSignUp(payload));
		dispatch(nextSignUpStep());
	};

	return (
		<div className="step-one">
			<Form form={form} layout="vertical" initialValues={data || null}>
				<Form.Item
					label="Username"
					name={"user_name"}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please input your username!",
						},
					]}
				>
					<InputCommon />
				</Form.Item>
				<Form.Item label="Password" name={"password"} hasFeedback>
					<InputPasswordCommon />
				</Form.Item>
				<Form.Item
					label="Confirm Password"
					name={"confirmPassword"}
					dependencies={["password"]}
					hasFeedback
					rules={[
						{
							required: true,
							message: "Please confirm your password!",
						},
						({ getFieldValue }) => ({
							validator(_, value) {
								if (
									!value ||
									getFieldValue("password") === value
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
				<Form.Item label="Role" name={"user_type_id"} hasFeedback>
					<SelectCommon
						data={USER_TYPE_OPTION}
						placeholder="Select your role"
					/>
				</Form.Item>
				<Form.Item
					name={"agree"}
					valuePropName="checked"
					rules={[
						{
							validator: (_, value) =>
								value
									? Promise.resolve()
									: Promise.reject(
											new Error("Should accept agreement")
									  ),
						},
					]}
				>
					<Checkbox>I agree to terms and conditions</Checkbox>
				</Form.Item>
			</Form>
			<div>
				<ButtonCommon onClick={next} size="medium">
					Next
				</ButtonCommon>
			</div>
		</div>
	);
};

export default SignUpStepOne;
