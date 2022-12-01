import React from "react";
import classNames from "classnames";
import "./SuspenseLoading.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
type Props = {
	size: "2xs" | "xsmall" | "small" | "medium" | "large";
};
const indicator = <LoadingOutlined spin />;
const SuspenseLoading = ({ size }: Props) => {
	return (
		<div
			className={classNames("suspense-loading", {
				[`suspense-loading-${size}`]: size,
			})}
		>
			<Spin spinning indicator={indicator} />
		</div>
	);
};

export default SuspenseLoading;
