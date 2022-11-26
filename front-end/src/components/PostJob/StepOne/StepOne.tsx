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
import InputCommon from "src/components/InputCommon/InputCommon";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxDispatch } from "src/redux/redux-hook";
import { nextStep, updateNewPost } from "src/redux/slice/NewPostSlice";
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

export const salaryMarks: SliderMarks = {
	0: sliderFormatter(0),
	10000000: sliderFormatter(10000000),
	25000000: sliderFormatter(25000000),
	40000000: sliderFormatter(40000000),
	50000000: sliderFormatter(50000000),
};
export type NewPostFormStepOne = {
	title: string;
	salary: [number, number];
};

const StepOne = (props: Props) => {
	const [form] = Form.useForm<NewPostFormStepOne>();
	const dispatch = useReduxDispatch();

	const next = async () => {
		try {
			const value = await form.validateFields();
			dispatch(
				updateNewPost({
					title: value.title,
					from_value: value.salary[0],
					to_value: value.salary[1],
				})
			);
			dispatch(nextStep());
		} catch (error) {}

		// dispatch(nextStep());
	};
	return (
		<div className="step-one">
			<Form<NewPostFormStepOne>
				form={form}
				layout="vertical"
				initialValues={{
					salary: [0, 5000000],
				}}
			>
				<Form.Item
					label="Title"
					name={"title"}
					rules={[{ required: true, message: "Title is required" }]}
				>
					<InputCommon />
				</Form.Item>
				<Form.Item label="Category">
					<SelectCommon data={test} />
				</Form.Item>
				<Form.Item label="Gender">
					<SelectCommon data={GENDER_OPTION} />
				</Form.Item>

				<Form.Item name="salary" label="Salary">
					<RangeSliderCommon
						marks={salaryMarks}
						min={0}
						max={50000000}
						range
						step={500000}
						tooltip={{ formatter: sliderFormatter }}
					/>
				</Form.Item>
			</Form>
			<div className="button-form">
				<ButtonCommon type="primary" onClick={next} size="small">
					Next
				</ButtonCommon>
			</div>
		</div>
	);
};

export default StepOne;
