import { Tag, TagProps } from "antd";
import React from "react";
import classNames from "classnames";
import "./TagCommon.scss";
interface Props extends TagProps {
	children: React.ReactNode;
	size?: "small" | "medium" | "large";
}

const TagCommon = ({ children, size = "small", ...props }: Props) => {
	return (
		<div className={classNames("tag-common", { [`tag-${size}`]: size })}>
			<Tag {...props}>{children}</Tag>
		</div>
	);
};

export default TagCommon;
