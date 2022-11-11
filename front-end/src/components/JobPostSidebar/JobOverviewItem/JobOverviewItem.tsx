import React from "react";
import "./JobOverviewItem.scss";
export type JobOverviewItemProps = {
	icon: React.ReactNode;
	name: string;
	content: string;
};

const JobOverviewItem = ({ icon, name, content }: JobOverviewItemProps) => {
	return (
		<div className="job-overview-item">
			<div className="job-overview-item-icon">{icon}</div>
			<div className="job-overview-item-left">
				<div className="job-overview-item-name">{name}:</div>
				<div className="job-overview-item-content">{content}</div>
			</div>
		</div>
	);
};

export default JobOverviewItem;
