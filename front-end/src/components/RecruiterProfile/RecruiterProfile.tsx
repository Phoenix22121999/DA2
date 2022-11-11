import { Form } from "antd";

import React from "react";
import InputCommon from "../InputCommon/InputCommon";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import SelectCommon, { SelectOptionValue } from "../SelectCommon/SelectCommon";
import SwitchCommon from "../SwitchCommon/SwitchCommon";
import "./RecruiterProfile.scss";
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

	return (
		<div className="recruiter-profile">
			<div className="dashboard-title">Profile</div>
			<div className="inner-content">
				<div className="avatar">
					<ProfileAvatar />
				</div>
				<div className="profile=form">
					<Form form={form} layout="vertical">
						<Form.Item label="Company Name">
							<InputCommon />
						</Form.Item>
						<Form.Item label="Email">
							<InputCommon />
						</Form.Item>
						<Form.Item label="Numberphone">
							<InputCommon />
						</Form.Item>
						<Form.Item label="Numberphone">
							<InputCommon />
						</Form.Item>
						<Form.Item label="Category">
							<SelectCommon data={test} />
						</Form.Item>
						<Form.Item label="City">
							<SelectCommon data={test} />
						</Form.Item>
						<Form.Item label="District">
							<SelectCommon data={test} />
						</Form.Item>
						<Form.Item label="Allow Search">
							<SwitchCommon />
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default RecruiterProfile;