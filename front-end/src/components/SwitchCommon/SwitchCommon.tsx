import { Switch, SwitchProps } from "antd";
import React from "react";
import "./SwitchCommon.scss";
interface Props extends SwitchProps {}

const SwitchCommon = (props: Props) => {
	return (
		<div className="switch-common">
			<Switch {...props}></Switch>
		</div>
	);
};

export default SwitchCommon;
