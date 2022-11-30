import React from "react";
import { Form } from "antd";
import { GENDER_OPTION } from "src/utils/contants";
import {
	formValueToCreatePostParameters,
	sliderFormatter,
} from "src/utils/function";
import { SliderMarks } from "antd/lib/slider";
import "./StepOnes.scss";
import { useReduxDispatch } from "src/redux/redux-hook";
import { nextStep, updateNewPost } from "src/redux/slice/NewPostSlice";

import useGetStatictisOption from "src/hooks/useGetStatictisOption";
import {
	ButtonCommon,
	InputCommon,
	RangeSliderCommon,
	SelectCommon,
} from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import SelectLocation from "src/components/SelectLocation/SelectLocation";
import { FormCommon } from "./../../../common/index";
type Props = {};

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
	gender: number;
	jobTypeList: number[];
	majorList: number[];
	province_code: string;
	district_code: string;
	ward_code: string;
	address: string;
};

const StepOne = (props: Props) => {
	const [form] = Form.useForm<NewPostFormStepOne>();
	const dispatch = useReduxDispatch();

	const next = async () => {
		try {
			const value = await form.validateFields();

			dispatch(updateNewPost(formValueToCreatePostParameters(value)));
			dispatch(nextStep());
		} catch (error) {}

		// dispatch(nextStep());
	};
	const { jobTypeOption, majorOption } = useGetStatictisOption();

	return (
		<React.Suspense fallback={<SuspenseLoading size="large" />}>
			<div className="step-one">
				<FormCommon<NewPostFormStepOne>
					form={form}
					layout="vertical"
					initialValues={{
						salary: [0, 5000000],
					}}
				>
					<Form.Item
						label="Title"
						name={"title"}
						rules={[
							{ required: true, message: "Title is required" },
						]}
					>
						<InputCommon />
					</Form.Item>
					<Form.Item
						label="Job Type"
						name="jobTypeList"
						rules={[
							{ required: true, message: "Job type is required" },
						]}
					>
						<SelectCommon
							placeholder="Please select job type"
							mode="multiple"
							data={jobTypeOption}
							allowClear
						/>
					</Form.Item>
					<Form.Item
						label="Major"
						name="majorList"
						rules={[
							{ required: true, message: "Major is required" },
						]}
					>
						<SelectCommon
							placeholder="Please select majors"
							mode="multiple"
							data={majorOption}
							allowClear
						/>
					</Form.Item>
					<Form.Item
						label="Gender"
						name={"gender"}
						rules={[
							{ required: true, message: "Gender is required" },
						]}
					>
						<SelectCommon
							data={GENDER_OPTION}
							placeholder="Please select gender"
						/>
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
					<SelectLocation form={form} />
					<Form.Item
						name="address"
						label="Address"
						rules={[
							{ required: true, message: "Address is required" },
						]}
					>
						<InputCommon />
					</Form.Item>
				</FormCommon>
				<div className="button-form">
					<ButtonCommon type="primary" onClick={next} size="small">
						Next
					</ButtonCommon>
				</div>
			</div>
		</React.Suspense>
	);
};

export default StepOne;
