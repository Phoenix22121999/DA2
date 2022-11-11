import React from "react";
import "./CompanyOverviewItem.scss";
export type CompanyOverviewItemProps = {
	name: string;
	content: string;
};

const CompanyOverviewItem = ({ name, content }: CompanyOverviewItemProps) => {
	return (
		<div className="company-overview-item">
			<div className="company-overview-item-name">{name}:</div>
			<div className="company-overview-item-content">{content}</div>
		</div>
	);
};

export default CompanyOverviewItem;
