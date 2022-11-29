import { Slider } from "antd";
import { SliderRangeProps } from "antd/lib/slider";
import React from "react";

interface RangeSliderCommonProps extends SliderRangeProps {}

const RangeSliderCommon = (props: RangeSliderCommonProps) => {
	return (
		<div className="slider-common">
			<Slider {...props} />
		</div>
	);
};

export default RangeSliderCommon;