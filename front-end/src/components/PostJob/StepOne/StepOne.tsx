import React, { useEffect, useState, useMemo } from "react";
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
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { nextStep, updateNewPost } from "src/redux/slice/NewPostSlice";
import {
	getListJobType,
	selectJobTypeList,
} from "src/redux/slice/JobTypeSlide";
import { getListMajor, selectMajorList } from "src/redux/slice/MajorSlide";
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
					gender: Number(value.gender),
					list_job_type: value.jobTypeList.map((id) => {
						return { job_type_id: id };
					}),
					list_major: value.majorList.map((id) => {
						return { majors_id: id };
					}),
				})
			);
			dispatch(nextStep());
		} catch (error) {}

		// dispatch(nextStep());
	};
	const [first, setFirst] = useState(true);
	const jobTypeList = useReduxSelector(selectJobTypeList);
	const majorList = useReduxSelector(selectMajorList);
	useEffect(() => {
		if (first) {
			if (jobTypeList.length === 0) {
				dispatch(getListJobType({ payload: {} }));
			}
			if (majorList.length === 0) {
				dispatch(getListMajor({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, jobTypeList, majorList]);
	const jobTypeOption: SelectOptionValue[] = useMemo(() => {
		return jobTypeList.map((jobType) => {
			return {
				value: jobType.job_type_name,
				key: jobType.id,
			};
		});
	}, [jobTypeList]);
	const majorOption: SelectOptionValue[] = useMemo(() => {
		return majorList.map((major) => {
			return {
				value: major.majors_name,
				key: major.id,
			};
		});
	}, [majorList]);
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
					rules={[{ required: true, message: "Major is required" }]}
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
					rules={[{ required: true, message: "Gender is required" }]}
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
