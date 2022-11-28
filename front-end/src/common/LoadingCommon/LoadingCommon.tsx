import { Spin, SpinProps } from "antd";
import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
interface Props extends Omit<SpinProps, "spinning" | "indicator"> {
	loading?: boolean;
}

const indicator = <LoadingOutlined style={{ fontSize: "12rem" }} spin />;

const LoadingCommon = ({ loading = false, children, ...props }: Props) => {
	return (
		<div className="loading-common">
			{loading ? (
				<Spin spinning {...props} indicator={indicator} />
			) : (
				children
			)}
		</div>
	);
};

export default LoadingCommon;
