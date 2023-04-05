import {
	ButtonCommon,
	FormCommon,
	InputCommon,
	ModalCommon,
	PopconfirmCommon,
	SelectCommon,
	TextAreaCommon,
} from "src/common";
import {
	PlusCircleOutlined,
	EditOutlined,
	DeleteOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
import { Form, message } from "antd";
import { useModal } from "src/hooks/useModal";
import { MONTH_OPTION, YEAR_OPTION } from "src/utils/contants";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	createAchievement,
	deleteAchievement,
	selectUserAchievement,
	updateAchievement,
} from "src/redux/slice/UserResumeSilce";
import { UserAchievement as UserAchievementType } from "src/types/Type";
type UserAchievementProps = {
	isView?: boolean;
};
const UserAchievement = ({ isView }: UserAchievementProps) => {
	const { open, isOpen, close } = useModal(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editItem, setEditItem] = useState(0);
	const dispatch = useReduxDispatch();
	const data = useReduxSelector(selectUserAchievement);
	const [form] = Form.useForm();
	const add = () => {
		setIsEdit(false);
		open();
	};
	const deleteItem = (id: number) => {
		dispatch(
			deleteAchievement({
				payload: { use_achievement_id: id },
			})
		);
	};
	const edit = (item: UserAchievementType) => {
		setEditItem(item.id);
		setIsEdit(true);
		form.setFieldsValue({
			name_achievement: item.name_achievement,
			month: item.month,
			year: item.year,
		});
		open();
	};

	const callback = (isSuccess: boolean) => {
		close();
		form.resetFields();
		if (isSuccess) {
			message.success(
				`${isEdit ? "Update" : "Add"} achievement successfully`
			);
			return;
		}
		message.error(`${isEdit ? "Update" : "Add"} achievement fail`);
	};
	const onAdd = async () => {
		const { name_achievement, month, year, description } =
			await form.validateFields();
		if (!isEdit) {
			dispatch(
				createAchievement({
					payload: {
						name_achievement: name_achievement.toString(),
						month: month.toString(),
						year: year.toString(),
						description: description ? description.toString() : "",
					},
					callback,
				})
			);
			return;
		}
		dispatch(
			updateAchievement({
				payload: {
					use_achievement_id: editItem || 0,
					name_achievement: name_achievement.toString(),
					month: month.toString(),
					year: year.toString(),
					description: description ? description.toString() : "",
				},
				callback,
			})
		);
	};

	if (isView && data.length < 1) {
		return null;
	}

	return (
		<div className="user-resume">
			<div className="user-resume-title-warper">
				<div className="user-resume-title">Achievement</div>
				{!isView && (
					<div className="user-resume-add-button">
						{" "}
						<ButtonCommon
							icon={<PlusCircleOutlined />}
							onClick={add}
						/>{" "}
					</div>
				)}
			</div>
			<div className="user-resume-content">
				{data.map((item) => {
					return (
						<div className="user-resume-item" key={item.id}>
							<div className="user-resume-item-title-warper">
								{" "}
								<div className="user-resume-item-title">
									{item.name_achievement}{" "}
								</div>
								{!isView && (
									<div
										className="user-resume-add-button"
										style={{ display: "flex" }}
									>
										{" "}
										<ButtonCommon
											onClick={() => edit(item)}
											size="small"
											ghost
											icon={<EditOutlined />}
										/>{" "}
										<div style={{ marginLeft: "1rem" }}>
											<PopconfirmCommon
												title="Are you sure to delete this item"
												onConfirm={() =>
													deleteItem(item.id)
												}
											>
												<ButtonCommon
													type="danger"
													size="small"
													icon={<DeleteOutlined />}
												></ButtonCommon>
											</PopconfirmCommon>
										</div>
									</div>
								)}
							</div>
							<div className="user-resume-item-time">
								{`${item.month}/${item.year}`}
							</div>
						</div>
					);
				})}
			</div>
			<ModalCommon open={isOpen} onCancel={close} footer={null}>
				<React.Suspense fallback={<SuspenseLoading size="small" />}>
					<div className="step-one">
						<FormCommon form={form} layout="vertical">
							<Form.Item
								label="Achievement Name"
								name={"name_achievement"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please input your achievement name!",
									},
								]}
							>
								<InputCommon />
							</Form.Item>

							<Form.Item
								label="Month"
								name={"month"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your month!",
									},
								]}
							>
								<SelectCommon data={MONTH_OPTION} />
							</Form.Item>
							<Form.Item
								label="Year"
								name={"year"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your year!",
									},
								]}
							>
								<SelectCommon data={YEAR_OPTION} />
							</Form.Item>

							<Form.Item
								label="Description"
								name={"description"}
								hasFeedback
							>
								<TextAreaCommon rows={3} />
							</Form.Item>
						</FormCommon>
						<div style={{ display: "flex" }}>
							<ButtonCommon size="small" onClick={onAdd}>
								Save
							</ButtonCommon>
						</div>
					</div>
				</React.Suspense>
			</ModalCommon>
		</div>
	);
};
export default UserAchievement;
