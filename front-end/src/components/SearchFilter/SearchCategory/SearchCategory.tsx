import React from "react";
import SelectCommon, {
	SelectOptionValue,
} from "src/components/SelectCommon/SelectCommon";

type Props = {};

const test: SelectOptionValue[] = [
	{
		key: "it",
		value: "Information Technology",
	},
	{
		key: "pharmacy",
		value: "Pharmacy",
	},
	{
		key: "accountant",
		value: "Accountant",
	},
	{
		key: "marketing",
		value: "Marketing",
	},
];

const SearchCategory = (props: Props) => {
	return (
		<div className="search-category">
			<div className="search-filter-title">category</div>
			<div className="search-filter-input">
				<SelectCommon data={test} size="large" showSearch allowClear />
			</div>
		</div>
	);
};

export default SearchCategory;
