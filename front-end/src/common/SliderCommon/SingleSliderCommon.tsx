import { Slider } from "antd";
import { SliderSingleProps } from "antd/lib/slider";
import React from "react";

interface SingleSliderCommonProps extends SliderSingleProps {}

export const SingleSliderCommon = (props: SingleSliderCommonProps) => {
	return (
		<div className="slider-common">
			<Slider {...props} />
		</div>
	);
};

export default SingleSliderCommon;
