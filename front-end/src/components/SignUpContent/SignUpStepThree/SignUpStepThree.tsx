import React from "react";
import "./SignUpStepThree.scss";
import LoadingCommon from "./../../LoadingCommon/LoadingCommon";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSignUpStatus } from "src/redux/slice/SignUp";
type Props = {};

const SignUpStepThree = (props: Props) => {
	const status = useReduxSelector(selectSignUpStatus);

	return (
		<div className="sign-up-step-three">
			<LoadingCommon size="large" loading={status === "loading"}>
				<div className="sign-up-success">
					<div className="sign-up-icon">
						{status === "idle" ? (
							<CheckCircleTwoTone twoToneColor="#5cb65c" />
						) : (
							<CloseCircleTwoTone twoToneColor="#f44a40" />
						)}
					</div>
					<div className="sign-up-message">
						{status === "idle"
							? "Sign up success"
							: "Some think wrong, please try again later"}
					</div>
					<div className="sign-up-button">
						<ButtonCommon
							size="medium"
							type={status === "idle" ? "success" : "danger"}
						>
							Back to Home Page
						</ButtonCommon>
					</div>
				</div>
			</LoadingCommon>
		</div>
	);
};

export default SignUpStepThree;
