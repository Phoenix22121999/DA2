import { Form } from "antd";
import React from "react";
import InputCommon from "../InputCommon/InputCommon";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";

type Props = {};

const ChangePassword = (props: Props) => {
	const [form] = Form.useForm();

	return (
		<div className="change-password">
			<div className="dashboard-title">Change Password</div>
			<div className="inner-content">
				<div className="profile=form">
					<Form form={form} layout="vertical">
						<Form.Item
							label="Old Password"
							name="o-p"
							rules={[
								{
									required: true,
									message: "This field is required",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
						<Form.Item
							label="New Password"
							name="n-p"
							rules={[
								{
									required: true,
									message: "This field is required",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
						<Form.Item
							label="Confirm Password"
							name="c-p"
							rules={[
								{
									required: true,
									message: "This field is required",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
						<Form.Item>
							<ButtonCommon htmlType="submit">
								Submit
							</ButtonCommon>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default ChangePassword;
