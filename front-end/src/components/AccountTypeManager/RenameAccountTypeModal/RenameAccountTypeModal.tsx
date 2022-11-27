import React, { useState, useEffect } from "react";
import { UserType } from "src/types/Type";
import { Form, message } from "antd";
import "./RenameAccountTypeModal.scss";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { CallbackFunction } from "src/types/UtilType";
import InputCommon from "src/components/InputCommon/InputCommon";
import { updateAccountType } from "src/redux/slice/AccountTypeSlide";
type Props = {
	edited?: UserType;
	onClose: () => void;
};

const RenameAccountTypeModal = ({ edited, onClose }: Props) => {
	const [name, setName] = useState(edited?.user_type_name);
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
		setName(edited?.user_type_name);
	}, [edited]);

	const onRename = () => {
		if (name === edited?.user_type_name) {
			return;
		}
		if (edited) {
			dispatch(
				updateAccountType({
					payload: {
						user_type_id: edited.id,
						user_type_name: name || "",
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

export default RenameAccountTypeModal;
