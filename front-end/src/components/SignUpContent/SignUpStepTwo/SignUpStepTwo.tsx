import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { GENDER_OPTION } from "src/utils/contants";
import "./SignUpStepTwo.scss";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	nextSignUpStep,
	prevSignUpStep,
	selectSignUpData,
	updateSignUp,
} from "src/redux/slice/SignUpSlice";
import { OptionalSignUpParameters } from "src/types/AuthType";
import { signUp } from "src/redux/slice/UserSilce";
import {
	ButtonCommon,
	FormCommon,
	InputCommon,
	InputNumberCommon,
	SelectCommon,
} from "src/common";
import SelectLocation from "src/components/SelectLocation/SelectLocation";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
type Props = {};

type SignInStepTwoForm = {
	first_name: string;
	last_name: string;
	email: string;
	number_phone: string;
	age: number;
	gender: string;
	address: string;
};

const SignUpStepTwo = (props: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const data = useReduxSelector(selectSignUpData);
	const [isRecruiter, setIsRecruiter] = useState<boolean>(false);

	useEffect(() => {
		if (data.user_type_id && Number(data.user_type_id) === 3) {
			setIsRecruiter(true);
		}
	}, [data]);

	// const callback: CallbackFunction<null> = (issuccess: boolean) => {
	// 	if (issuccess) {
	// 		message.success("Sign up success");
	// 	} else {
	// 		message.error("Sign up erroe");
	// 	}
	// 	navigate("/");
	// };

	const next = async () => {
		const value: SignInStepTwoForm = await form.validateFields();

		const payload: OptionalSignUpParameters = {
			...value,
			gender: Number(value.gender),
		};
		dispatch(updateSignUp(payload));
		dispatch(nextSignUpStep());
		dispatch(signUp({}));
	};

	const prev = () => {
		dispatch(prevSignUpStep());
	};
	return (
		<React.Suspense fallback={<SuspenseLoading size="medium" />}>
			<div className="sign-up-step-two">
				<FormCommon form={form} layout="vertical" initialValues={data}>
					{isRecruiter ? (
						<Form.Item
							label="Company Name"
							name={"full_name"}
							hasFeedback
							rules={[
								{
									required: true,
									message: "Please input your first name!",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
					) : (
						<>
							<Form.Item
								label="First Name"
								name={"first_name"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please input your first name!",
									},
								]}
							>
								<InputCommon />
							</Form.Item>
							<Form.Item
								label="Last Name"
								name={"last_name"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your last name!",
									},
								]}
							>
								<InputCommon />
							</Form.Item>
						</>
					)}

					<Form.Item
						label="Email"
						name={"email"}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
							{
								pattern: new RegExp(
									"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \\t]|(\\[\\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\\t -Z^-~]*])"
								),
								message: "Please input validate email!",
							},
						]}
					>
						<InputCommon />
					</Form.Item>
					<Form.Item
						label="Number Phone"
						name={"number_phone"}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input your number phone!",
							},
						]}
					>
						<InputCommon />
					</Form.Item>
					{!isRecruiter && (
						<>
							<Form.Item
								label="Age"
								name={"age"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your age!",
									},
								]}
							>
								<InputNumberCommon min={1} />
							</Form.Item>
							<Form.Item
								label="Gender"
								name={"gender"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your gender!",
									},
								]}
							>
								<SelectCommon data={GENDER_OPTION} />
							</Form.Item>
						</>
					)}
					<SelectLocation
						initialValue={{
							city_id: data.city_id,
							district_id: data.district_id,
							ward_id: data.ward_id,
						}}
					/>
					<Form.Item
						label="Address"
						name={"address"}
						hasFeedback
						rules={[
							{
								required: true,
								message: "Please input your address!",
							},
						]}
					>
						<InputCommon />
					</Form.Item>
				</FormCommon>
				<div className="button-group">
					<ButtonCommon onClick={prev} size="medium">
						Back
					</ButtonCommon>
					<ButtonCommon onClick={next} size="medium">
						Next
					</ButtonCommon>
				</div>
			</div>
		</React.Suspense>
	);
};

export default SignUpStepTwo;
