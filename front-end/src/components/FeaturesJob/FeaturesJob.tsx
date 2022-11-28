import React from "react";
import FeaturesJobItem, {
	FeaturesJobItemProps,
} from "./FeaturesJobItem/FeaturesJobItem";
import TEST_LOGO from "../../assets/images/logo.png";
import "./FeaturesJob.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { ButtonCommon } from "src/common";
type Props = {};
const FEATURES_JOB: FeaturesJobItemProps[] = [
	{
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
];

const FeaturesJob = (props: Props) => {
	return (
		<div className="features-job">
			<div className="container">
				<div className="features-job-title">Featured Job</div>
				<div className="features-job-box">
					{FEATURES_JOB.map((features_job, index) => {
						return (
							<FeaturesJobItem key={index} {...features_job} />
						);
					})}
				</div>
				<div className="features-job-button">
					<ButtonCommon ghost size="large" type="outstanding">
						<Link to={ROUTE.SEARCH}>All Job</Link>
					</ButtonCommon>
				</div>
			</div>
		</div>
	);
};

export default FeaturesJob;
