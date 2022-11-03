import { Slider } from "antd";
import { SliderRangeProps, SliderSingleProps } from "antd/lib/slider";
import React from "react";

interface SingleSliderCommonProps extends SliderSingleProps {}

export const SingleSliderCommon = (props: SingleSliderCommonProps) => {
	return (
		<div className="slider-common">
			<Slider {...props} />
		</div>
	);
};

interface RangeSliderCommonProps extends SliderRangeProps {}

export const RangeSliderCommon = (props: RangeSliderCommonProps) => {
	return (
		<div className="slider-common">
			<Slider {...props} />
		</div>
	);
};
