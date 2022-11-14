import { Form } from "antd";

import React from "react";
import InputCommon from "../InputCommon/InputCommon";
import SelectCommon, { SelectOptionValue } from "../SelectCommon/SelectCommon";
import SwitchCommon from "../SwitchCommon/SwitchCommon";
import "./CandidateProfile.scss";
import ProfileAvatar from "../ProfileAvatar/ProfileAvatar";
import { UserAccount } from "src/types/Type";
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
	// const [isDirty, setIsDirty] = useState<boolean>(false);
	// const [isDirtyObject, setisDirtyObject] = useState<
	// 	IsDirtyObject<OptionalAuthUser>
	// >({});
	// usePrompt("dar");
	// const handleOnValuesChange = (value:  Partial<UserAccount>, values: UserAccount) => {
	// 	Object.entries(value).forEach(
	// 		([key, value]) => console.log(key, value)
	// 	  );
	// };

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

export default CadidateProfile;
