import { Form } from "antd";

import React from "react";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, updateAccount } from "src/redux/slice/UserSilce";
import InputCommon from "../InputCommon/InputCommon";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import SelectCommon, { SelectOptionValue } from "../SelectCommon/SelectCommon";
import "./RecruiterProfile.scss";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { UserAccount } from "src/types/Type";
import { useReduxDispatch } from "./../../redux/redux-hook";
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
				<div className="profile-form">
					<Form form={form} layout="vertical" initialValues={data}>
						<Form.Item label="Company Name" name={"full_name"}>
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

export default RecruiterProfile;
