import { Modal, ModalProps } from "antd";
import React from "react";

interface Props extends ModalProps {}

const ModalCommon = (props: Props) => {
	return (
		<div className="modal-common">
			<Modal {...props}></Modal>
		</div>
	);
};

export default ModalCommon;
