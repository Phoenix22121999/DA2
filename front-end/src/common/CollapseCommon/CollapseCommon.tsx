import { Collapse, CollapseProps } from "antd";
import React from "react";

interface Props extends CollapseProps {}

const CollapseCommon = ({ children, ...props }: Props) => {
	return (
		<div className="collapse-common">
			<Collapse {...props}>{children}</Collapse>
		</div>
	);
};

export default CollapseCommon;
