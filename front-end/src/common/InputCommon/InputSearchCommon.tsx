import { Input } from "antd";
import { SearchProps } from "antd/lib/input";
import React from "react";
import "./InputCommon.scss";
interface Props extends SearchProps {}

const InputSearchCommon = (props: Props) => {
	return (
		<div className="input-common">
			<Input.Search {...props} />
		</div>
	);
};
export default InputSearchCommon;
