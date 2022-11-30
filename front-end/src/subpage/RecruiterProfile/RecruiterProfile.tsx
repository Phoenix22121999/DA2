import { Form } from "antd";

import React from "react";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, updateAccount } from "src/redux/slice/UserSilce";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import "./RecruiterProfile.scss";
import { UserAccount } from "src/types/Type";
import { useReduxDispatch } from "../../redux/redux-hook";
import { ButtonCommon, FormCommon, InputCommon } from "src/common";
import SuspenseLoading from "../../components/SuspenseLoading/SuspenseLoading";
import SelectLocation from "src/components/SelectLocation/SelectLocation";
import { FormItemCommon } from "./../../common/index";

type Props = {};

const RecruiterProfile = (props: Props) => {
	const [form] = Form.useForm();
	const data = useReduxSelector(selectUserData);
	const dispatch = useReduxDispatch();
	const onUpdate = async () => {
		const value: Partial<UserAccount> = await form.validateFields();
		dispatch(updateAccount({ payload: value }));
	};

	return (
		<div className="recruiter-profile">
			<div className="dashboard-title">Profile</div>
			<div className="inner-content">
				<div className="avatar">
					<ProfileAvatar />
				</div>
				<React.Suspense fallback={<SuspenseLoading size="medium" />}>
					<div className="profile-form">
						<FormCommon
							form={form}
							layout="vertical"
							initialValues={{
								...data,
								province_code: data.province_code?.toString(),
								district_code: data.district_code?.toString(),
								ward_code: data.ward_code?.toString(),
							}}
						>
							<FormItemCommon
								label="Company Name"
								name={"full_name"}
								rules={[
									{
										required: true,
										message:
											"Please input your company name!",
									},
								]}
							>
								<InputCommon />
							</FormItemCommon>
							<FormItemCommon
								label="Email"
								name={"email"}
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
							</FormItemCommon>
							<FormItemCommon
								label="Numberphone"
								name={"number_phone"}
								rules={[
									{
										required: true,
										message:
											"Please input your number phone!",
									},
									{
										validator(_, value) {
											var re =
												/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

											return re.test(value)
												? Promise.resolve()
												: Promise.reject(
														new Error(
															"Please input validate email!"
														)
												  );
										},
									},
								]}
							>
								<InputCommon />
							</FormItemCommon>

							<SelectLocation
								form={form}
								initialValue={{
									province_code: data.province_code,
									district_code: data.district_code,
									ward_code: data.ward_code,
								}}
							/>
							<FormItemCommon
								label="Address"
								name={"address"}
								rules={[
									{
										required: true,
										message: "Please input your address!",
									},
								]}
							>
								<InputCommon />
							</FormItemCommon>
						</FormCommon>
						<div className="button-form">
							<ButtonCommon size="small" onClick={onUpdate}>
								Update
							</ButtonCommon>
						</div>
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default RecruiterProfile;
