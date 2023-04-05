import React, { useState } from "react";
import { CV } from "src/types/Type";
import { Form, message } from "antd";
import "./RenameCVModal.scss";
import { useReduxDispatch } from "src/redux/redux-hook";
import { updateCV } from "src/redux/slice/CVSlide";
import { CallbackFunction } from "src/types/UtilType";
import { ButtonCommon, InputCommon } from "src/common";
type Props = {
	edited?: CV;
	onClose: () => void;
};

const RenameCVModal = ({ edited, onClose }: Props) => {
	const [name, setName] = useState(edited?.file_name);
	const dispatch = useReduxDispatch();
	const onChane = (e: React.ChangeEvent<HTMLInputElement>) => {
		// console.log();
		setName(e.target.value);
	};
	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Rename success");
		} else {
			message.error("Rename fail");
		}
		onClose();
	};
	const onRename = () => {
		if (name === edited?.file_name) {
			return;
		}
		if (edited) {
			dispatch(
				updateCV({
					payload: {
						cv_id: edited.id,
						file_name_new: name || "",
					},
					callback,
				})
			);
		}
	};
	return (
		<div className="rename-modal">
			<Form.Item label="New Name">
				<InputCommon value={name} onChange={onChane} />
			</Form.Item>
			<div className="button-form">
				<ButtonCommon size="small" onClick={onRename}>
					Rename
				</ButtonCommon>
			</div>
		</div>
	);
};

export default RenameCVModal;
