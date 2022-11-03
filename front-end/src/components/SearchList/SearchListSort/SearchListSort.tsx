import React from "react";
import SelectCommon, {
	SelectOptionValue,
} from "src/components/SelectCommon/SelectCommon";
import "./SearchListSort.scss";
type Props = {};

const Test: SelectOptionValue[] = [
	{
		value: "Time ASC",
		key: "time-asc",
	},
	{
		value: "Time DESC",
		key: "time-desc",
	},
	{
		value: "Salary ASC",
		key: "salary-asc",
	},
	{
		value: "Salary DESC",
		key: "salary-desc",
	},
];

const SearchListSort = (props: Props) => {
	return (
		<div className="search-list-sort">
			<SelectCommon data={Test} defaultValue={"time-asc"} />
		</div>
	);
};

export default SearchListSort;
