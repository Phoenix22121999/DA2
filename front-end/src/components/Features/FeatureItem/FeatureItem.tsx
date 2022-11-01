import React from "react";
import "./FeatureItem.scss";
export type FeatureItemProps = {
	title: string;
	content: String;
};

const FeatureItem = ({ title, content }: FeatureItemProps) => {
	return (
		<div className="feature-item-outer">
			<div className="feature-item-inner">
				<h4 className="title">{title}</h4>
				<div className="content">{content}</div>
			</div>
		</div>
	);
};

export default FeatureItem;
