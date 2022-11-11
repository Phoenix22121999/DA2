import React from "react";
import { Form } from "antd";
import SelectCommon, {
	SelectOptionValue,
} from "src/components/SelectCommon/SelectCommon";
import { GENDER_OPTION } from "src/utils/contants";
import { RangeSliderCommon } from "src/components/SliderCommon/SliderCommon";
import { sliderFormatter } from "src/utils/function";
import { SliderMarks } from "antd/lib/slider";
import "./StepOnes.scss";
type Props = {};
const test: SelectOptionValue[] = [
	{
		key: "HCM",
		value: "Hồ Chí MInh",
	},
	{
		key: "HN",
		value: "Hà Nội",
	},
	{
		key: "TG",
		value: "Tiền Giang",
	},
	{
		key: "H",
		value: "Huế",
	},
];

const marks: SliderMarks = {
	0: sliderFormatter(0),
	10000000: sliderFormatter(10000000),
	25000000: sliderFormatter(25000000),
	40000000: sliderFormatter(40000000),
	50000000: sliderFormatter(50000000),
};

const StepOne = (props: Props) => {
	const [form] = Form.useForm();

	return (
		<div className="step-one">
			<Form form={form} layout="vertical">
				<Form.Item label="Category">
					<SelectCommon data={test} />
				</Form.Item>
				<Form.Item label="Gender">
					<SelectCommon data={GENDER_OPTION} />
				</Form.Item>

				<Form.Item name="slider" label="Salary">
					<RangeSliderCommon
						marks={marks}
						min={0}
						max={50000000}
						range
						defaultValue={[0, 5000000]}
						step={500000}
						tooltip={{ formatter: sliderFormatter }}
					/>
				</Form.Item>
			</Form>
		</div>
	);
};

export default StepOne;
