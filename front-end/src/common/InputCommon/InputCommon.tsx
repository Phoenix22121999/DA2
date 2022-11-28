import { Input, InputProps } from "antd";
import React from "react";
import "./InputCommon.scss";
interface Props extends InputProps {}

const InputCommon = (props: Props) => {
	return (
		<div className="input-common">
			<Input {...props} />
		</div>
	);
};

export default InputCommon;
