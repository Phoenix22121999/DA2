import React from "react";
import "./StepThree.scss";
import LoadingCommon from "../../LoadingCommon/LoadingCommon";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import ButtonCommon from "src/components/ButtonCommon/ButtonCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { resetSignUp, setCurrentSignUpStep } from "src/redux/slice/SignUpSlice";
import { useNavigate } from "react-router-dom";
import { selectNewPostStatus } from "src/redux/slice/NewPostSlice";
import { ROUTE } from "src/utils/contants";
type Props = {};

const StepThree = (props: Props) => {
	const status = useReduxSelector(selectNewPostStatus);
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();

	const backToHomePage = () => {
		navigate(ROUTE.RECRUITER_JOB_MANAGER);
		dispatch(setCurrentSignUpStep(0));
		dispatch(resetSignUp());
	};

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
							? "Create new post success"
							: "Some think wrong, please try again later"}
					</div>
					<div className="sign-up-button">
						<ButtonCommon
							size="medium"
							type={status === "idle" ? "success" : "danger"}
							onClick={backToHomePage}
						>
							Back to Post manager
						</ButtonCommon>
					</div>
				</div>
			</LoadingCommon>
		</div>
	);
};

export default StepThree;
