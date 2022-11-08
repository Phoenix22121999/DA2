import React from "react";
import "./CandidateDashboardContent.scss";
import InfoCard, { InfoCardProps } from "./InfoCard/InfoCard";
import {
	FileOutlined,
	SnippetsOutlined,
	ProfileOutlined,
} from "@ant-design/icons";
type Props = {};
const test: InfoCardProps[] = [
	{
		icon: <SnippetsOutlined />,
		title: "Applied Jobs",
		number: 10,
	},
	{
		icon: <FileOutlined />,
		title: "CV",
		number: 100,
	},
	{
		icon: <ProfileOutlined />,
		title: "Profile",
	},
];

const CandidateDashboardContent = (props: Props) => {
	return (
		<div className="candidate-dashboard-content-inner">
			<div className="dashboard-title">Dashboard</div>
			<div className="inner-content">
				<div className="info-card-warpper">
					{test.map((item) => {
						return <InfoCard key={item.title} {...item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default CandidateDashboardContent;
