import React from "react";
import FeatureItem, { FeatureItemProps } from "./FeatureItem/FeatureItem";
import "./Features.scss";
type FeaturesProps = {};
const contents: FeatureItemProps[] = [
	{
		title: "Searching",
		content: "Search jobs based on majors, job types",
	},
	{
		title: "Applying",
		content: "Apply for the job position that's right for you",
	},
	{
		title: "Security",
		content: "Your data is secure, not given to third parties",
	},
	{
		title: "Notifications",
		content: "Receive email notifications of changes",
	},
];
export const Features = (props: FeaturesProps) => {
	return (
		<section className="features">
			<div className="container">
				<div className="features-box">
					{contents.map((content, index) => {
						return <FeatureItem key={content.title} {...content} />;
					})}
				</div>
			</div>
		</section>
	);
};
