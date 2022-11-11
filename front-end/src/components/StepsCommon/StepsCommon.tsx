import React from "react";
import { Steps, StepsProps } from "antd";

interface StepsCommonProps extends StepsProps {}

const StepsCommon = (StepsCommonprops: StepsCommonProps) => {
	return (
		<div className="steps-common">
			<Steps {...StepsCommonprops} />
		</div>
	);
};

export default StepsCommon;
