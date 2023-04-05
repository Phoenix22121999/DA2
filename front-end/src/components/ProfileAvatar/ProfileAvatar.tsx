import { Upload } from "antd";
import React, { useState, useEffect } from "react";
import ImgCrop from "antd-img-crop";
import {
	RcFile,
	UploadChangeParam,
	UploadFile,
	UploadProps,
} from "antd/lib/upload";
import FakeAvatar from "../../assets/images/fake-avatar.jpg";
import { RedoOutlined } from "@ant-design/icons";
import { message } from "antd";
import "./ProfileAvatar.scss";
import { BaseReponseType } from "src/types/ApiType";
import { FileTypeUploadReponese } from "src/types/UploadType";
import api from "src/apis/index.api";
import { CDN_URL } from "src/utils/contants";
import { useModal } from "./../../hooks/useModal";
import ModalCommon from "./../../common/ModalCommon/ModalCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { UserAccount } from "src/types/Type";
import { CallbackFunction } from "src/types/UtilType";
import { updateAccount } from "src/redux/slice/UserSilce";
type Props = {
	initialValue?: string;
};
const beforeUpload = (file: RcFile) => {
	const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
	if (!isJpgOrPng) {
		message.error("You can only upload JPG/PNG file!");
	}
	const isLt2M = file.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		message.error("Image must smaller than 2MB!");
	}
	return isJpgOrPng && isLt2M;
};

const customRequest: UploadProps["customRequest"] = async ({
	file,
	onSuccess,
	onError,
}) => {
	try {
		const response = await api.fileApi.uploadFile({ files: file });
		if (response.code !== 200) {
			onError && onError(new Error("Upload Error"), response);
		}
		onSuccess && onSuccess(response);
	} catch (error) {
		onError && onError(new Error(), error);
	}
};

const ProfileAvatar = ({ initialValue }: Props) => {
	const [avatar, setAvatar] = useState<string>(
		initialValue
			? initialValue.includes("https")
				? initialValue
				: `${CDN_URL}/${initialValue}`
			: FakeAvatar
	);
	useEffect(() => {
		setAvatar(
			initialValue
				? initialValue.includes("https")
					? initialValue
					: `${CDN_URL}/${initialValue}`
				: FakeAvatar
		);
	}, [initialValue]);

	const [changeAvatar, setChangeAvatar] = useState<string>(
		initialValue
			? initialValue.includes("https")
				? initialValue
				: `${CDN_URL}/${initialValue}`
			: FakeAvatar
	);
	const [fileName, setFileName] = useState<string>("");
	const { open, isOpen, close } = useModal(false);
	const dispatch = useReduxDispatch();
	const handleChange: UploadProps["onChange"] = (
		info: UploadChangeParam<
			UploadFile<BaseReponseType<FileTypeUploadReponese[]>>
		>
	) => {
		if (
			info.file.response &&
			info.file.response.data &&
			info.file.response.data?.length > 0
		) {
			setAvatar(`${CDN_URL}/${info.file.response.data[0].filename}`);
			setChangeAvatar(
				`${CDN_URL}/${info.file.response.data[0].filename}`
			);
			setFileName(info.file.response.data[0].filename);
		}
	};
	const callback: CallbackFunction<Partial<UserAccount>> = (
		isSuccess,
		result
	) => {
		if (isSuccess) {
			message.success("Update avatar success");
		} else {
			message.error("Update avatar fail");
		}
	};
	const onOk = () => {
		setAvatar(changeAvatar);
		dispatch(
			updateAccount({
				payload: {
					avartar: fileName,
				},
				callback,
			})
		);
	};

	return (
		<div className="avatar-inner">
			<img src={avatar} alt="" />
			<div className="uploader">
				<div className="button-upload" onClick={open}>
					<RedoOutlined />
				</div>
			</div>
			<ModalCommon
				open={isOpen}
				onCancel={close}
				width="32rem"
				centered
				onOk={onOk}
			>
				<div className="change-avatar-modal">
					<ImgCrop rotate>
						<Upload
							maxCount={1}
							name="avatar"
							showUploadList={false}
							beforeUpload={beforeUpload}
							onChange={handleChange}
							customRequest={customRequest}
						>
							<img
								className="change-avatar-img"
								src={changeAvatar}
								alt=""
							/>
						</Upload>
					</ImgCrop>
					<div className="change-avatar-text">
						(Click image to upload image)
					</div>
				</div>
			</ModalCommon>
		</div>
	);
};

export default ProfileAvatar;
