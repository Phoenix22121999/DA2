import React, { useState } from "react";
import { CV } from "src/types/Type";
import InputCommon from "../InputCommon/InputCommon";
import { Form, message } from "antd";
import "./RenameCVModal.scss";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { updateCV } from "src/redux/slice/CVSlide";
import { CallbackFunction } from "src/types/UtilType";
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
			message.success("Rename fail");
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
						id_cv: edited.id,
						file_name_new: name || "",
					},
					callback,
				})
			);
		}
	};
	return (
		<div className="reanme-cv-modal">
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
