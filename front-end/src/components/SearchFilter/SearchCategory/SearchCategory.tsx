import React from "react";
import SelectCommon, {
	OptionValue,
} from "src/components/SelectCommon/SelectCommon";

type Props = {};

const test: OptionValue[] = [
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

const SearchCategory = (props: Props) => {
	return (
		<div className="search-category">
			<div className="search-filter-title">category</div>
			<div className="search-filter-input">
				<SelectCommon data={test} size="large" />
			</div>
		</div>
	);
};

export default SearchCategory;
