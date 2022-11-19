import { Form, message, Upload } from "antd";
import React, { useState } from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import InputCommon from "../InputCommon/InputCommon";
import "./AddCVModal.scss";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile, UploadFile, UploadProps } from "antd/lib/upload";
import api from "src/apis/index.api";
import { useReduxDispatch } from "src/redux/redux-hook";
import { createCV } from "src/redux/slice/CVSlide";
import { BaseReponseType } from "src/types/ApiType";
import { FileTypeUploadReponese } from "src/types/UploadType";
import { CallbackFunction } from "src/types/UtilType";

type Props = {
	onClose: () => void;
};

const beforeUpload = (file: RcFile) => {
	const isPdf = file.type === "application/pdf";
	if (!isPdf) {
		message.error("You can only upload PDF file!");
	}
	const isLt10M = file.size / 1024 / 1024 < 10;
	if (!isLt10M) {
		message.error("Image must smaller than 10MB!");
	}
	return isPdf && isLt10M ? true : Upload.LIST_IGNORE;
};

const customRequest: UploadProps["customRequest"] = async ({
	file,
	onSuccess,
	onError,
}) => {
	try {
		const response = await api.uploadFileApi.uploadFile({ files: file });
		if (response.code !== 200) {
			onError && onError(new Error("Upload Error"), response);
		}
		onSuccess && onSuccess(response);
	} catch (error) {
		onError && onError(new Error(), error);
	}
};

const normFile = (e?: {
	file: UploadFile<BaseReponseType<FileTypeUploadReponese> | string>;
	fileList: UploadFile<BaseReponseType<FileTypeUploadReponese> | string>[];
}) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

type createCVForm = {
	file_name: string;
	files: UploadFile<BaseReponseType<FileTypeUploadReponese[]>>[];
};

const AddCVModal = ({ onClose }: Props) => {
	const [form] = Form.useForm();
	const dispatch = useReduxDispatch();
	const [isPdfOk, setIsPdfOk] = useState(false);
	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Create cv success");
		} else {
			message.error("Create cv fail");
		}
		form.resetFields();
		onClose();
	};
	const onAdd = async () => {
		try {
			const value: createCVForm = await form.validateFields();
			if (isPdfOk) {
				const response = value.files[0].response?.data;
				if (response) {
					dispatch(
						createCV({
							payload: {
								file_name: value.file_name,
								file_name_hash: response[0].filename,
							},
							callback,
						})
					);
				}
			}
		} catch (error) {}
	};
	const handleOnclose = () => {
		form.resetFields();
		onClose();
	};

	const handleChange: UploadProps["onChange"] = (info) => {
		setIsPdfOk(true);
		if (info.file.status === "done" || info.file.status === "success") {
			message.success("Upload CV success");
		} else if (info.file.status === "error") {
			setIsPdfOk(false);
			message.error("Upload CV fail, please try later");
		}
	};
	return (
		<div className="add-cv-modal">
			<Form form={form} layout="vertical">
				<Form.Item
					label="CV name"
					name={"file_name"}
					rules={[
						{ required: true, message: "Please input name for CV" },
					]}
				>
					<InputCommon />
				</Form.Item>
				<Form.Item
					label="Upload Pdf"
					name={"files"}
					valuePropName="fileList"
					getValueFromEvent={normFile}
					rules={[
						({ getFieldValue }) => ({
							validator(_, value) {
								if (value) {
									if (isPdfOk) {
										return Promise.resolve();
									}

									return Promise.reject(
										new Error("Cannot upload pdf")
									);
								}
								return Promise.resolve();
							},
						}),
						{ required: true, message: "Need upload pdf" },
					]}
				>
					<Upload
						maxCount={1}
						customRequest={customRequest}
						beforeUpload={beforeUpload}
						onChange={handleChange}
						showUploadList={{
							showPreviewIcon: true,
							showRemoveIcon: true,
							showDownloadIcon: false,
						}}
					>
						<ButtonCommon
							icon={<UploadOutlined />}
							size="small"
							type="secondary"
							ghost
						>
							Click to Upload
						</ButtonCommon>
					</Upload>
				</Form.Item>
			</Form>
			<div className="button-form">
				<ButtonCommon onClick={handleOnclose} size="small" type="info">
					close
				</ButtonCommon>
				<ButtonCommon onClick={onAdd} size="small">
					Add CV
				</ButtonCommon>
			</div>
		</div>
	);
};

export default AddCVModal;
