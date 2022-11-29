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
		// console.log(value);

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
								initialValues={data}
							>
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
											message:
												"Please input your last name!",
										},
									]}
								>
									<InputCommon />
								</Form.Item>
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
											message:
												"Please input validate email!",
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
											message:
												"Please input your number phone!",
										},
									]}
								>
									<InputCommon />
								</Form.Item>
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
											message:
												"Please input your gender!",
										},
									]}
								>
									<SelectCommon data={GENDER_OPTION} />
								</Form.Item>
								<SelectLocation
									initialValue={{
										city_id: data.city_id,
										district_id: data.district_id,
										ward_id: data.ward_id,
									}}
								/>
								<Form.Item label="Address" name={"address"}>
									<InputCommon />
								</Form.Item>
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
