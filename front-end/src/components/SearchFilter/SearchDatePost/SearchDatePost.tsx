import { RadioChangeEvent } from "antd";
import React from "react";
import {
	ButtonRadioGroupCommon,
	RadioValue,
} from "src/common/ButtonRadioGroupCommon/ButtonRadioGroupCommon";
import "./SearchDatePost.scss";
type Props = {
	handleChange: (value: string) => void;
};

const DATE_POST: RadioValue[] = [
	{
		key: "",
		value: "All",
	},
	{
		key: "1",
		value: "Last 24 Hours",
	},
	{
		key: "7",
		value: "Last 7 Days",
	},
	{
		key: "14",
		value: "Last 14 Days",
	},
	{
		key: "30",
		value: "Last 30 Days",
	},
];

const SearchDatePost = ({ handleChange }: Props) => {
	const onChange = (value: string | number) => {
		handleChange(value.toString());
	};
	return (
		<div className="search-date-post">
			<div className="search-filter-title">Date Post</div>
			<div className="search-filter-input ">
				<ButtonRadioGroupCommon
					data={DATE_POST}
					className="search-date-post-button-radio"
					name="search-date-post-button-radio"
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default SearchDatePost;
