import React from "react";
import "./SearchBar.scss";
import SelectCommon, { SelectOptionValue } from "../SelectCommon/SelectCommon";
import ButtonCommon from "../ButtonCommon/ButtonCommon";

type SearchBarProps = {};

const Test: SelectOptionValue[] = [
	{
		key: "it",
		value: "IT11111111111111111111111111111",
	},
	{
		key: "it1",
		value: "IT111",
	},
	{
		key: "it2",
		value: "IT2",
	},
];

function SearchBar(props: SearchBarProps) {
	return (
		<div className="search-bar">
			<div className="search-bar-item">
				<SelectCommon
					data={Test}
					placeholder="major"
					showSearch
					size="large"
				/>
			</div>
			<div className="search-bar-item">
				<SelectCommon data={Test} placeholder="area" size="large" />
			</div>
			<div className="search-bar-item">
				<SelectCommon data={Test} placeholder="salary" size="large" />
			</div>
			<div className="search-bar-item">
				<ButtonCommon>Search</ButtonCommon>
			</div>
		</div>
	);
}

export default SearchBar;
