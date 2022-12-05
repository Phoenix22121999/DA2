import React from "react";
import "./Recruitment.scss";
import RecruiterImage from "../../assets/images/good-job.jpg";
import CandidateImage from "../../assets/images/word.jpg";
import { ButtonCommon } from "src/common";
import { useUserAuth } from "src/hooks/useUserAuth";
import { ROUTE, USER_TYPE } from "src/utils/contants";
import { useNavigate } from "react-router-dom";
type RecruitmentProps = {};

const Recruitment = (props: RecruitmentProps) => {
	const { isAuth, user } = useUserAuth();
	const navigate = useNavigate();
	const onUploadCV = () => {
		if (isAuth && user.user_type_id === USER_TYPE.CANDIDATE) {
			navigate(ROUTE.CADIDATE_CV_MANAGER);
		} else {
			navigate(ROUTE.SIGN_UP);
		}
	};

	const onPost = () => {
		if (isAuth && user.user_type_id === USER_TYPE.RECRUITER) {
			navigate(ROUTE.RECRUITER_JOB_MANAGER);
		} else {
			navigate(ROUTE.SIGN_UP);
		}
	};

	return (
		<div className="recruitment">
			<div className="recruitment-warpper container">
				{/* <div className="recruitment-candidate"> */}
				<div className="image candidate-image">
					<img src={CandidateImage} alt="CandidateImage" />
				</div>
				<div className="content candidate-content">
					<div className="title">Create your profile</div>
					<div className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel, fuga deserunt eligendi nisi magni recusandae sint
						animi suscipit excepturi voluptates error beatae amet
						laborum esse ipsa tempora alias totam quis illo iusto
						dignissimos incidunt dolor adipisci! Quas adipisci
						provident qui!
					</div>
					<div>
						<ButtonCommon size="large" onClick={onUploadCV}>
							Upload CV
						</ButtonCommon>
					</div>
				</div>
				{/* </div> */}
				<div className="or">OR</div>
				{/* <div className="recruitment-recruiter"> */}
				<div className="content recruiter-content">
					<div className="title">Create your recruitment post</div>
					<div className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Vel, fuga deserunt eligendi nisi magni recusandae sint
						animi suscipit excepturi voluptates error beatae amet
						laborum esse ipsa tempora alias totam quis illo iusto
						dignissimos incidunt dolor adipisci! Quas adipisci
						provident qui!
					</div>
					<div>
						<ButtonCommon
							type="outstanding"
							size="large"
							onClick={onPost}
						>
							Write your post{" "}
						</ButtonCommon>
					</div>
				</div>
				<div className="image recruiter-image">
					<img src={RecruiterImage} alt="CandidateImage" />
				</div>
			</div>
		</div>
	);
};

export default Recruitment;
