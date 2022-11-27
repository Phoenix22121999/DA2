import React, { useState, useEffect } from "react";
import { JobType } from "src/types/Type";
import { Form, message } from "antd";
import "./RenameJobTypeModal.scss";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { CallbackFunction } from "src/types/UtilType";
import InputCommon from "src/components/InputCommon/InputCommon";
import { updateJobType } from "src/redux/slice/JobTypeSlide";
type Props = {
	edited?: JobType;
	onClose: () => void;
};

const RenameJobTypeModal = ({ edited, onClose }: Props) => {
	const [name, setName] = useState(edited?.job_type_name);
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
		setName(edited?.job_type_name);
	}, [edited]);

	const onRename = () => {
		if (name === edited?.job_type_name) {
			return;
		}
		if (edited) {
			dispatch(
				updateJobType({
					payload: {
						job_type_id: edited.id,
						job_type_name: name || "",
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

export default RenameJobTypeModal;
