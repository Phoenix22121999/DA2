import React from "react";
import "./JobOverviewItem.scss";
import classNames from "classnames";
export type JobOverviewItemProps = {
	icon: React.ReactNode;
	name: string;
	content: string;
	isHideIcon?: boolean;
	isHorizontal?: boolean;
};

const JobOverviewItem = ({
	icon,
	name,
	content,
	isHideIcon,
	isHorizontal,
}: JobOverviewItemProps) => {
	return (
		<div className={`job-overview-item`}>
			{!isHideIcon && (
				<div className="job-overview-item-icon">{icon}</div>
			)}
			<div
				className={classNames(`job-overview-item-left`, {
					horizontal: isHorizontal,
				})}
			>
				<div className="job-overview-item-name">{name}:</div>
				<div className="job-overview-item-content">{content}</div>
			</div>
		</div>
	);
};

export default JobOverviewItem;
