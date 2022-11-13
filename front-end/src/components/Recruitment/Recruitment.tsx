import React from "react";
import "./Recruitment.scss";
import RecruiterImage from "../../assets/images/good-job.jpg";
import CandidateImage from "../../assets/images/word.jpg";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
type RecruitmentProps = {};

const Recruitment = (props: RecruitmentProps) => {
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
						<ButtonCommon>Upload CV</ButtonCommon>
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
						<ButtonCommon type="outstanding" size="medium">
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
