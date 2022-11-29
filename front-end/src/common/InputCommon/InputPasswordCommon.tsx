import { Input, InputProps } from "antd";
import React from "react";
import "./InputCommon.scss";
interface Props extends InputProps {}

const InputPasswordCommon = (props: Props) => {
	return (
		<div className="input-common">
			<Input.Password {...props} />
		</div>
	);
};
export default InputPasswordCommon;