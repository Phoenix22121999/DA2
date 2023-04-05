import React from "react";
import "./Recruitment.scss";
import RecruiterImage from "../../assets/images/interview2.jpg";
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
				<div className="image candidate-image">
					<img src={CandidateImage} alt="CandidateImage" />
				</div>
				<div className="content candidate-content">
					<div className="title">Uppload your CV</div>
					<div className="description">
						If you are a candidate you can easily create a candidate
						account to start posting your CVs, you can use those CVs
						to upload to job postings that you see fit.
					</div>
					<div>
						<ButtonCommon size="large" onClick={onUploadCV}>
							Upload CV
						</ButtonCommon>
					</div>
				</div>
				<div className="or">OR</div>
				<div className="content recruiter-content">
					<div className="title">Create your recruitment post</div>
					<div className="description">
						If you are an recruiter, you can easily sign up for an
						account and start posting jobs and wait for candidates
						to apply, we will notify you as soon as a candidate
						applies.
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
