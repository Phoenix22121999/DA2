import { Form, message } from "antd";

import React from "react";
import InputCommon from "../InputCommon/InputCommon";
import SelectCommon, { SelectOptionValue } from "../SelectCommon/SelectCommon";
import "./CandidateProfile.scss";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { UserAccount } from "src/types/Type";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, updateAccount } from "src/redux/slice/UserSilce";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { CallbackFunction } from "src/types/UtilType";
const test: SelectOptionValue[] = [
	{
		key: "HCM",
		value: "Hồ Chí MInh",
	},
	{
		key: "HN",
		value: "Hà Nội",
	},
	{
		key: "TG",
		value: "Tiền Giang",
	},
	{
		key: "H",
		value: "Huế",
	},
];
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
					<ProfileAvatar />
				</div>
				<div className="profile-form">
					<Form<UserAccount>
						form={form}
						layout="vertical"
						initialValues={data}
						// onValuesChange={handleOnValuesChange}
					>
						<Form.Item label="First Name" name={"first_name"}>
							<InputCommon />
						</Form.Item>
						<Form.Item label="Last Name" name={"last_name"}>
							<InputCommon />
						</Form.Item>
						<Form.Item label="Email" name={"email"}>
							<InputCommon />
						</Form.Item>
						<Form.Item label="Numberphone" name={"number_phone"}>
							<InputCommon />
						</Form.Item>
						<Form.Item label="Address" name={"address"}>
							<InputCommon />
						</Form.Item>
						<Form.Item label="City">
							<SelectCommon data={test} />
						</Form.Item>
						<Form.Item label="District">
							<SelectCommon data={test} />
						</Form.Item>
					</Form>
					<div className="button-form">
						<ButtonCommon size="small" onClick={onUpdate}>
							Update
						</ButtonCommon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CadidateProfile;
