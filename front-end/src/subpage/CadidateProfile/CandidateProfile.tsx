import { Form, message } from "antd";

import React from "react";
import "./CandidateProfile.scss";
import ProfileAvatar from "../../components/ProfileAvatar/ProfileAvatar";
import { UserAccount } from "src/types/Type";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, updateAccount } from "src/redux/slice/UserSilce";
import { CallbackFunction } from "src/types/UtilType";

// import {
// 	ButtonCommon,
// 	InputCommon,
// 	InputNumberCommon,
// 	SelectCommon,
// } from "src/common";
import SelectLocation from "../../components/SelectLocation/SelectLocation";
import { GENDER_OPTION } from "src/utils/contants";
import {
	ButtonCommon,
	FormCommon,
	FormItemCommon,
	InputCommon,
	InputNumberCommon,
	SelectCommon,
} from "src/common";
import SuspenseLoading from "../../components/SuspenseLoading/SuspenseLoading";

type Props = {};

const CadidateProfile = (props: Props) => {
	const [form] = Form.useForm();
	const data = useReduxSelector(selectUserData);
	const dispatch = useReduxDispatch();
	const callback: CallbackFunction<Partial<UserAccount>> = (
		isSuccess,
		result
	) => {
		if (isSuccess) {
			message.success("Update profile success");
		} else {
			message.error("Update profile fail");
		}
	};
	const onUpdate = async () => {
		const value: Partial<UserAccount> = await form.validateFields();

		dispatch(updateAccount({ payload: value, callback }));
	};

	return (
		<div className="cadidate-profile">
			<div className="dashboard-title">Profile</div>
			<div className="inner-content">
				<div className="avatar">
					<ProfileAvatar initialValue={data.avartar || undefined} />
				</div>
				<React.Suspense fallback={<SuspenseLoading size="medium" />}>
					<div className="profile-form">
						<React.Suspense
							fallback={<SuspenseLoading size="medium" />}
						>
							<FormCommon<UserAccount>
								form={form}
								layout="vertical"
								initialValues={{
									...data,
									province_code:
										data.province_code?.toString(),
									district_code:
										data.district_code?.toString(),
									ward_code: data.ward_code?.toString(),
								}}
							>
								<FormItemCommon
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
								</FormItemCommon>
								<FormItemCommon
									label="Last Name"
									name={"last_name"}
									hasFeedback
									rules={[
										{
											required: true,
											message:
												"Please input your last name!",
										},
									]}
								>
									<InputCommon />
								</FormItemCommon>
								<FormItemCommon
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
											message:
												"Please input validate email!",
										},
									]}
								>
									<InputCommon />
								</FormItemCommon>
								<FormItemCommon
									label="Number Phone"
									name={"number_phone"}
									hasFeedback
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
								<FormItemCommon
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
								</FormItemCommon>
								<FormItemCommon
									label="Gender"
									name={"gender"}
									hasFeedback
									rules={[
										{
											required: true,
											message:
												"Please input your gender!",
										},
									]}
								>
									<SelectCommon data={GENDER_OPTION} />
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
											message:
												"Please input your address!",
										},
									]}
								>
									<InputCommon />
								</FormItemCommon>
							</FormCommon>
						</React.Suspense>

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

export default CadidateProfile;
