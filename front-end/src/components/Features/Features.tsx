import React from "react";
import FeatureItem, { FeatureItemProps } from "./FeatureItem/FeatureItem";
import "./Features.scss";
type FeaturesProps = {};
const contents: FeatureItemProps[] = [
	{
		title: "Searching",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, beatae!",
	},
	{
		title: "Applying",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, beatae!",
	},
	{
		title: "Security",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, beatae!",
	},
	{
		title: "Notifications",
		content:
			"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, beatae!",
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
