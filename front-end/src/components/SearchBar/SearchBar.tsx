import React from "react";
import { Select } from "antd";
import "./SearchBar.scss";
import SelectCommon, { OptionValue } from "../SelectCommon/SelectCommon";

type SearchBarProps = {};

const { Option } = Select;

const Test: OptionValue[] = [
	{
		key: "it",
		value: "IT",
	},
	{
		key: "it1",
		value: "IT1",
	},
	{
		key: "it2",
		value: "IT2",
	},
];

function SearchBar({}: SearchBarProps) {
	return (
		<div className="search-bar">
			<SelectCommon
				data={Test}
				placeholder="major"
				showSearch
				size="large"
			/>
			<SelectCommon data={Test} placeholder="area" size="large" />
			<SelectCommon data={Test} placeholder="salary" size="large" />
		</div>
	);
}

export default SearchBar;
