import React, { useState, useEffect } from "react";
import { UserType } from "src/types/Type";
import { Form, message } from "antd";
import "./RenameAccountTypeModal.scss";
import { useReduxDispatch } from "src/redux/redux-hook";
import { CallbackFunction } from "src/types/UtilType";
import { updateAccountType } from "src/redux/slice/AccountTypeSlide";
import { ButtonCommon, InputCommon } from "src/common";
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

export default RenameAccountTypeModal;
