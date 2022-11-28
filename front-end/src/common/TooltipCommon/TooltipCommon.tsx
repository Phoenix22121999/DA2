import { Tooltip } from "antd";
import { TooltipPropsWithOverlay } from "antd/lib/tooltip";
import React from "react";

interface Props extends TooltipPropsWithOverlay {}

const TooltipCommon = ({ children, ...props }: Props) => {
	return (
		<div className="tooltip-common">
			{
				<Tooltip {...props}>
					<div>{children}</div>
				</Tooltip>
			}
		</div>
	);
};

export default TooltipCommon;
