import React from "react";
import JobOverviewItem, {
	JobOverviewItemProps,
} from "./JobOverviewItem/JobOverviewItem";
import "./JobPostSidebar.scss";
import {
	CalendarOutlined,
	FieldTimeOutlined,
	EnvironmentOutlined,
	DollarCircleOutlined,
	SnippetsOutlined,
} from "@ant-design/icons";
import CompanyOverviewItem, {
	CompanyOverviewItemProps,
} from "./CompanyOverviewItem/CompanyOverviewItem";
import { GenderIcon } from "../icons/Gender/Gender";
type Props = {};

const TEST: JobOverviewItemProps[] = [
	{
		icon: <CalendarOutlined />,
		name: "Date Posted",
		content: "Posted 1 hours ago",
	},
	{
		icon: <FieldTimeOutlined />,
		name: "Expiration date",
		content: "April 06, 2021",
	},
	{
		icon: <EnvironmentOutlined />,
		name: "Location",
		content: "London, UK",
	},
	{
		icon: <SnippetsOutlined />,
		name: "Job Category",
		content: "Designer",
	},
	{
		icon: <DollarCircleOutlined />,
		name: "Salary",
		content: "Posted 1 hours ago",
	},
	{
		icon: <GenderIcon />,
		name: "Gender",
		content: "Male",
	},
];

const TEST2: CompanyOverviewItemProps[] = [
	{
		name: "Company size",
		content: "501-1,000",
	},
	{
		name: "Founded in",
		content: "2011",
	},
	{
		name: "Phone",
		content: "123 456 7890",
	},
	{
		name: "Email",
		content: "info@joio.com",
	},
	{
		name: "Location",
		content: "London, UK",
	},
];

const JobPostSidebar = (props: Props) => {
	return (
		<div className="job-post-sidebar">
			<div className="job-overview">
				<div className="job-sidebar-title">Job Overview</div>
				<div className="job-overview-content">
					{TEST.map((item) => (
						<JobOverviewItem key={item.name} {...item} />
					))}
				</div>
			</div>
			<div className="company-overview">
				<div className="job-sidebar-title">Company Overview</div>
				<div className="company-overview-content">
					{TEST2.map((item) => (
						<CompanyOverviewItem key={item.name} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default JobPostSidebar;
