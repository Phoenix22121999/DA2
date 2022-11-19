import React from "react";
import { Popconfirm, PopconfirmProps } from "antd";

interface Props extends PopconfirmProps {}

const PopconfirmCommon = ({ children, ...props }: Props) => {
	return (
		<div className="popconfirm-common">
			<Popconfirm {...props}>
				<div>{children}</div>
			</Popconfirm>
		</div>
	);
};

export default PopconfirmCommon;
