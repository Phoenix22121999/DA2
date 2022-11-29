import React, { useState, useEffect } from "react";
import { Majors } from "src/types/Type";
import { Form, message } from "antd";
import "./RenameMajorModal.scss";
import { useReduxDispatch } from "src/redux/redux-hook";
import { CallbackFunction } from "src/types/UtilType";
import { updateMajor } from "src/redux/slice/MajorSlide";
import { ButtonCommon, InputCommon } from "src/common";
type Props = {
	edited?: Majors;
	onClose: () => void;
};

const RenameMajorModal = ({ edited, onClose }: Props) => {
	const [name, setName] = useState(edited?.majors_name);
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
	useEffect(() => {
		setName(edited?.majors_name);
	}, [edited]);

	const onRename = () => {
		if (name === edited?.majors_name) {
			return;
		}
		if (edited) {
			dispatch(
				updateMajor({
					payload: {
						majors_id: edited.id,
						majors_name: name || "",
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

export default RenameMajorModal;
