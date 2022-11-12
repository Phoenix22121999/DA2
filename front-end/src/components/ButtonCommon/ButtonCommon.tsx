import { Button, ButtonProps } from "antd";
import classNames from "classnames";
import React from "react";
import "./ButtonCommon.scss";
interface ButtonCommonProps extends Omit<ButtonProps, "type" | "size"> {
	children: React.ReactNode;
	className?: string;
	type?:
		| "primary"
		| "secondary"
		| "info"
		| "warning"
		| "danger"
		| "success"
		| "outstanding";
	size?: "small" | "medium" | "large";
}

export default function ButtonCommon({
	children,
	className,
	type = "primary",
	ghost,
	size = "medium",
	...props
}: ButtonCommonProps) {
	return (
		<Button
			className={classNames("button-common", className, {
				[`button-${size}`]: size,
				[`button-${type}`]: type,
				[`button-ghost`]: ghost,
			})}
			{...props}
		>
			{children}
		</Button>
	);
}
