import React from "react";
import SelectCommon, {
	SelectOptionValue,
} from "src/components/SelectCommon/SelectCommon";

type Props = {};

const test: SelectOptionValue[] = [
	{
		key: "HCM",
		value: "Hồ Chí MInh",
	},
	{
		key: "HN",
		value: "Hà Nội",
	},
	{
		key: "TG",
		value: "Tiền Giang",
	},
	{
		key: "H",
		value: "Huế",
	},
];

const SearchLocation = (props: Props) => {
	return (
		<div className="search-location">
			<div className="search-filter-title">Location</div>
			<div className="search-filter-input">
				<SelectCommon data={test} size="large" showSearch allowClear />
			</div>
		</div>
	);
};

export default SearchLocation;
