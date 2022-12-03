import React, { useMemo } from "react";
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
import { DetailRecruitmentPost } from "./../../types/CombineType";
import { formatDate, inputNumberFormatter } from "src/utils/function";
interface Props extends Partial<DetailRecruitmentPost> {}

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
	const jobOverview: JobOverviewItemProps[] = useMemo(() => {
		const overview = [
			{
				icon: <CalendarOutlined />,
				name: "Date Posted",
				content: formatDate(props.create_date!),
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
				name: "Job Type",
				content:
					props.post_job_types
						?.map((jt) => jt.job_type.job_type_name)
						.join(",") || "",
			},
			{
				icon: <SnippetsOutlined />,
				name: "Job Major",
				content:
					props.post_majors
						?.map((m) => m.majors.majors_name)
						.join(",") || "",
			},
			{
				icon: <DollarCircleOutlined />,
				name: "Salary",
				content: `${inputNumberFormatter(
					props.from_value || 0
				)}-${inputNumberFormatter(props.to_value)}`,
			},
			{
				icon: <GenderIcon />,
				name: "Gender",
				content: props.gender?.toString() || "",
			},
		];
		return overview;
	}, [props]);

	return (
		<div className="job-post-sidebar">
			<div className="job-overview">
				<div className="job-sidebar-title">Job Overview</div>
				<div className="job-overview-content">
					{jobOverview.map((item) => (
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
