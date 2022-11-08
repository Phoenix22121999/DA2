import { Upload } from "antd";
import React, { useState } from "react";
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
type Props = {};
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

const dummyRequest: UploadProps["customRequest"] = ({ onSuccess }) => {
	setTimeout(() => {
		onSuccess && onSuccess("ok");
	}, 0);
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
	const reader = new FileReader();
	reader.addEventListener("load", () => callback(reader.result as string));
	reader.readAsDataURL(img);
};

const ProfileAvatar = (props: Props) => {
	const [avatar, setAvatar] = useState<string>(FakeAvatar);

	const handleChange: UploadProps["onChange"] = (
		info: UploadChangeParam<UploadFile>
	) => {
		getBase64(info.file.originFileObj as RcFile, (url) => {
			// setLoading(false);
			setAvatar(url);
		});
	};
	return (
		<div className="avatar-inner">
			<img src={avatar} alt="" />
			<div className="uploader">
				<ImgCrop rotate>
					<Upload
						name="avatar"
						showUploadList={false}
						beforeUpload={beforeUpload}
						onChange={handleChange}
						customRequest={dummyRequest}
					>
						<div className="button-upload">
							<RedoOutlined />
						</div>
					</Upload>
				</ImgCrop>
			</div>
		</div>
	);
};

export default ProfileAvatar;
