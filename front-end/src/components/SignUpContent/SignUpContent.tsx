import { StepProps } from "antd";
import React from "react";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSignUpCurentStep } from "src/redux/slice/SignUpSlice";
import SignUpStepOne from "./SignUpStepOne/SignUpStepOne";
import SignUpStepTwo from "./SignUpStepTwo/SignUpStepTwo";
import "./SignUpContent.scss";
import SignUpStepThree from "./SignUpStepThree/SignUpStepThree";
import { StepsCommon } from "src/common";
import { useScrollToTop } from "src/hooks/useScrollToTop";
type Props = {};
const steps = [
	{
		title: "Step one",
		content: <SignUpStepOne />,
	},
	{
		title: "Step two",
		content: <SignUpStepTwo />,
	},
	{
		title: "Final",
		content: <SignUpStepThree />,
	},
];

const itemsa: StepProps[] = steps.map((item) => ({
	key: item.title,
	title: item.title,
}));
const SignUpContent = (props: Props) => {
	const currentStep = useReduxSelector(selectSignUpCurentStep);
	useScrollToTop(currentStep);

	// const dispatch = useReduxDispatch();

	// const onChange = (value: number) => {
	// 	dispatch(setCurrentSignUpStep(value));
	// };
	return (
		<div className="sign-up-content">
			<div className="container">
				<div className="sign-up-content-inner">
					<StepsCommon
						items={itemsa}
						current={currentStep}
						// onChange={onChange}
					/>
					<div className="sign-up-steps-content">
						{steps[currentStep].content}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpContent;
