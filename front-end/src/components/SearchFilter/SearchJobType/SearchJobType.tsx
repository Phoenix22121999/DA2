import React from "react";
import JobTypeItem, { JobTypeItemProps } from "./JobTypeItem/JobTypeItem";

type Props = {};

const JOB_TYPE: JobTypeItemProps[] = [
	{
		name: "Freelance",
	},
	{
		name: "Full Time",
	},
	{
		name: "Part Time",
	},
	{
		name: "Intership",
	},
	{
		name: "Temporary",
	},
];

const SearchJobType = (props: Props) => {
	return (
		<div className="search-job-type">
			<div className="search-filter-title">Job Type</div>
			<div className="search-filter-input">
				{JOB_TYPE.map((type) => {
					return <JobTypeItem key={type.name} {...type} />;
				})}
			</div>
		</div>
	);
};

export default SearchJobType;
