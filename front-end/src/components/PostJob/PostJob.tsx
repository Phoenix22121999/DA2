import { message, StepProps } from "antd";
import React from "react";
import StepsCommon from "../StepsCommon/StepsCommon";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";
import { useReduxSelector } from "src/redux/redux-hook";
import {
	nextStep,
	prevStep,
	selectNewPostCurentStep,
	setCurrent,
} from "src/redux/slice/NewPostSlice";
import { useReduxDispatch } from "./../../redux/redux-hook";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
type Props = {};
const steps = [
	{
		title: "Step one",
		content: <StepOne />,
	},
	{
		title: "Step two",
		content: <StepTwo />,
	},
	{
		title: "Last",
		content: "Last-content",
	},
];

const itemsa: StepProps[] = steps.map((item) => ({
	key: item.title,
	title: item.title,
}));

const PostJob = (props: Props) => {
	const currentStep = useReduxSelector(selectNewPostCurentStep);
	const dispatch = useReduxDispatch();

	const next = () => {
		dispatch(nextStep());
	};

	const prev = () => {
		dispatch(prevStep());
	};

	const onChange = (value: number) => {
		dispatch(setCurrent(value));
	};

	// const a: StepsProps = {
	// 	items: itemsa,
	// 	current: currentStep,
	// };

	return (
		<div className="post-job">
			<StepsCommon
				items={itemsa}
				current={currentStep}
				onChange={onChange}
			/>

			<div className="steps-content">{steps[currentStep].content}</div>
			<div className="steps-action">
				{currentStep < steps.length - 1 && (
					<ButtonCommon type="primary" onClick={() => next()}>
						Next
					</ButtonCommon>
				)}
				{currentStep === steps.length - 1 && (
					<ButtonCommon
						type="primary"
						onClick={() => message.success("Processing complete!")}
					>
						Done
					</ButtonCommon>
				)}
				{currentStep > 0 && (
					<ButtonCommon
						style={{ margin: "0 8px" }}
						onClick={() => prev()}
					>
						Previous
					</ButtonCommon>
				)}
			</div>
		</div>
	);
};

export default PostJob;
