import React, { useState } from "react";
import JobTypeItem from "./JobTypeItem/JobTypeItem";
import useGetStatictisOption from "./../../../hooks/useGetStatictisOption";

type Props = {
	handleChange: (value: string[]) => void;
};

const SearchJobType = ({ handleChange }: Props) => {
	const { jobTypeOption } = useGetStatictisOption();
	const [list, setList] = useState<string[]>([]);
	const onToggleitem = (name: string | number, checked: boolean) => {
		const newList = list.filter((item) => item !== name);
		if (checked) {
			newList.push(name.toString());
		}
		setList(newList);
		handleChange(newList);
	};
	return (
		<div className="search-job-type">
			<div className="search-filter-title">Job Type</div>
			<div className="search-filter-input">
				{jobTypeOption.map((type) => {
					return (
						<JobTypeItem
							key={type.key}
							itemKey={type.key}
							value={type.value}
							onChange={onToggleitem}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default SearchJobType;
