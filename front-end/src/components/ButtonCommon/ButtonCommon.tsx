import { Button } from "antd";
import classNames from "classnames";
import React from "react";
import "./ButtonCommon.scss";
interface ButtonCommonProps {
	children: React.ReactNode;
	className?: string;
	type?: "primary" | "secondary" | "info" | "warning" | "danger";
}

export default function ButtonCommon({
	children,
	className,
	type = "primary",
	...props
}: ButtonCommonProps) {
	return (
		<Button
			className={classNames("button-common", className, {
				[`button-${type}`]: type,
			})}
		>
			{children}
		</Button>
	);
}
