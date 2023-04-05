import React from "react";
import "./SignUpStepThree.scss";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	resetSignUp,
	selectSignUpStatus,
	setCurrentSignUpStep,
} from "src/redux/slice/SignUpSlice";
import { useNavigate } from "react-router-dom";
import { ButtonCommon, LoadingCommon } from "src/common";
type Props = {};

const SignUpStepThree = (props: Props) => {
	const status = useReduxSelector(selectSignUpStatus);
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();

	const backToHomePage = () => {
		navigate("/");
		dispatch(setCurrentSignUpStep(0));
		dispatch(resetSignUp());
	};

	return (
		<div className="sign-up-step-three">
			<LoadingCommon size="large" loading={status === "loading"}>
				<div className="sign-up-success">
					<div className="sign-up-icon">
						{status === "idle" || status === "wait" ? (
							<CheckCircleTwoTone twoToneColor="#5cb65c" />
						) : (
							<CloseCircleTwoTone twoToneColor="#f44a40" />
						)}
					</div>
					<div className="sign-up-message">
						{status === "idle" || status === "wait"
							? `Sign up success${
									status === "wait" &&
									", please wait for admin approve your account. we will notify to your mail"
							  }`
							: "Some think wrong, please try again later"}
					</div>
					<div className="sign-up-button">
						<ButtonCommon
							size="medium"
							type={
								status === "idle" || status === "wait"
									? "success"
									: "danger"
							}
							onClick={backToHomePage}
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
