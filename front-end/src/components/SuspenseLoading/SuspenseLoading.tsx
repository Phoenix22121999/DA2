import React from "react";
import LoadingCommon from "src/common/LoadingCommon/LoadingCommon";
import classNames from "classnames";
import "./SuspenseLoading.scss";
type Props = {
	size: "xsmall" | "small" | "medium" | "large";
};

const SuspenseLoading = ({ size }: Props) => {
	return (
		<div
			className={classNames("suspense-loading", {
				[`suspense-loading-${size}`]: size,
			})}
		>
			<LoadingCommon loading />
		</div>
	);
};

export default SuspenseLoading;
