import React from "react";
import {
	ButtonRadioGroupCommon,
	RadioValue,
} from "src/components/ButtonRadioGroupCommon/ButtonRadioGroupCommon";
import "./SearchDatePost.scss";
type Props = {};

const DATE_POST: RadioValue[] = [
	{
		key: "all",
		value: "All",
	},
	{
		key: "last24h",
		value: "Last 24 Hours",
	},
	{
		key: "last7d",
		value: "Last 7 Days",
	},
	{
		key: "last14d",
		value: "Last 14 Days",
	},
	{
		key: "last30d",
		value: "Last 30 Days",
	},
];

const SearchDatePost = (props: Props) => {
	return (
		<div className="search-date-post">
			<div className="search-filter-title">Date Post</div>
			<div className="search-filter-input ">
				<ButtonRadioGroupCommon
					data={DATE_POST}
					className="search-date-post-button-radio"
					name="search-date-post-button-radio"
				/>
			</div>
		</div>
	);
};

export default SearchDatePost;
