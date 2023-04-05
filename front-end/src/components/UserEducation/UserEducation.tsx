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
import { Checkbox, Form, message } from "antd";
import { useModal } from "src/hooks/useModal";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import { MONTH_OPTION, YEAR_OPTION } from "src/utils/contants";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	createEducation,
	deleteEducation,
	selectUserEducation,
	updateEducation,
} from "src/redux/slice/UserResumeSilce";
import { UserEducation as UserEducationType } from "src/types/Type";
type UserEducationProps = {
	isView?: boolean;
};
const UserEducation = ({ isView }: UserEducationProps) => {
	const { open, isOpen, close } = useModal(false);
	const [toNow, setToNow] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editItem, setEditItem] = useState(0);
	const dispatch = useReduxDispatch();
	const data = useReduxSelector(selectUserEducation);
	const [form] = Form.useForm();
	const add = () => {
		setIsEdit(false);
		open();
	};
	const deleteItem = (id: number) => {
		dispatch(
			deleteEducation({
				payload: { use_education_id: id },
			})
		);
	};
	const edit = (item: UserEducationType) => {
		setEditItem(item.id);
		setIsEdit(true);
		setToNow(item.month_end ? false : true);
		form.setFieldsValue({
			name_school: item.name_school,
			majors: item.majors,
			month_start: item.month_start,
			year_start: item.year_start,
			month_end: item.month_end ? item.month_end : "1",
			year_end: item.year_end ? item.year_end : "2023",
			is_to_now: item.month_end ? false : true,
		});
		open();
	};
	const checkBox = (value: CheckboxChangeEvent) => {
		setToNow(value.target.checked);
	};
	const callback = (isSuccess: boolean) => {
		close();
		form.resetFields();
		if (isSuccess) {
			message.success(
				`${isEdit ? "Update" : "Add"} education successfully`
			);
			return;
		}
		message.error(`${isEdit ? "Update" : "Add"} education fail`);
	};
	const onAdd = async () => {
		const {
			name_school,
			majors,
			month_start,
			year_end,
			month_end,
			year_start,
			description,
		} = await form.validateFields();
		if (!isEdit) {
			dispatch(
				createEducation({
					payload: {
						name_school: name_school.toString(),
						majors: majors.toString(),
						month_start: month_start.toString(),
						year_start: year_start.toString(),
						month_end: month_end ? month_end.toString() : "",
						year_end: year_end ? year_end.toString() : "",
						description: description ? description.toString() : "",
					},
					callback,
				})
			);
			return;
		}
		dispatch(
			updateEducation({
				payload: {
					use_education_id: editItem || 0,
					name_school: name_school.toString(),
					majors: majors.toString(),
					month_start: month_start.toString(),
					year_start: year_start.toString(),
					month_end: month_end ? month_end.toString() : "",
					year_end: year_end ? year_end.toString() : "",
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
				<div className="user-resume-title">Education </div>
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
									{item.name_school}{" "}
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
							<div className="user-resume-item-subtitle">
								{item.majors}
							</div>
							<div className="user-resume-item-time">
								{`${item.month_start}/${item.year_start} - ${
									item.month_end
										? `${item.month_end}/${item.year_end}`
										: "Now"
								}`}
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
								label="School Name"
								name={"name_school"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please input your school name!",
									},
								]}
							>
								<InputCommon />
							</Form.Item>
							<Form.Item
								label="Major"
								name={"majors"}
								hasFeedback
								rules={[
									{
										required: true,
										message: "Please input your majors!",
									},
								]}
							>
								<InputCommon />
							</Form.Item>
							<Form.Item
								label="Month Start"
								name={"month_start"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please input your start month!",
									},
								]}
							>
								<SelectCommon data={MONTH_OPTION} />
							</Form.Item>
							<Form.Item
								label="Year Start"
								name={"year_start"}
								hasFeedback
								rules={[
									{
										required: true,
										message:
											"Please input your start year!",
									},
								]}
							>
								<SelectCommon data={YEAR_OPTION} />
							</Form.Item>
							<Form.Item
								name={"is_to_now"}
								valuePropName="checked"
							>
								<Checkbox onChange={checkBox}>To now</Checkbox>
							</Form.Item>
							{!toNow && (
								<>
									<Form.Item
										label="Month End"
										name={"month_end"}
										hasFeedback
										rules={[
											{
												required: true,
												message:
													"Please input your end month!",
											},
										]}
									>
										<SelectCommon data={MONTH_OPTION} />
									</Form.Item>
									<Form.Item
										label="Year End"
										name={"year_end"}
										hasFeedback
										rules={[
											{
												required: true,
												message:
													"Please input your end year!",
											},
										]}
									>
										<SelectCommon data={YEAR_OPTION} />
									</Form.Item>
								</>
							)}
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
export default UserEducation;
