import { StepProps } from "antd";
import React from "react";
import { useReduxSelector } from "src/redux/redux-hook";
import {
	selectNewPostCurentStep,
	setCurrent,
} from "src/redux/slice/NewPostSlice";
import { useReduxDispatch } from "../../redux/redux-hook";
import StepOne from "./StepOne/StepOne";
import StepTwo from "./StepTwo/StepTwo";
import StepThree from "./StepThree/StepThree";
import { StepsCommon } from "src/common";
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
		content: <StepThree />,
	},
];

const itemsa: StepProps[] = steps.map((item) => ({
	key: item.title,
	title: item.title,
}));

const PostJob = (props: Props) => {
	const currentStep = useReduxSelector(selectNewPostCurentStep);
	const dispatch = useReduxDispatch();

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
		</div>
	);
};

export default PostJob;
