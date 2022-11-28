import { InputNumber, InputNumberProps } from "antd";
import React from "react";
import "./InputNumberCommon.scss";
interface Props extends InputNumberProps {}

const InputNumberCommon = (props: Props) => {
	return (
		<div className="input-number-common">
			<InputNumber {...props} />
		</div>
	);
};

export default InputNumberCommon;
