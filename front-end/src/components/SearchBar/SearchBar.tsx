import React, { ChangeEvent, EventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCommon, InputCommon, SelectCommon } from "src/common";
import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
import useDebounce from "src/hooks/useDebounce";
import useGetStatictisOption from "src/hooks/useGetStatictisOption";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	searchPost,
	updatePrameterAndSearchPost,
	updateSearchParameter,
} from "src/redux/slice/SearchPostSlide";
import { SearchParameter } from "src/types/SearchType";
import { CallbackFunction } from "src/types/UtilType";
import { ROUTE } from "src/utils/contants";
import "./SearchBar.scss";

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
	const dispatch = useReduxDispatch();
	const navidate = useNavigate();
	const callback: CallbackFunction = (isSuuess) => {
		if (isSuuess) {
			navidate("/search");
		}
	};

	const handleSearch = () => {
		dispatch(searchPost({ callback }));
	};
	const handleKeyWordChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateSearchParameter({ key_word: event.target.value }));
	};
	const handleMajorChange = (value: string) => {
		dispatch(updateSearchParameter({ list_major: [value] }));
	};

	const handleJobTypeChange = (value: string) => {
		dispatch(updateSearchParameter({ list_job_type: [value] }));
	};
	const { majorOption, jobTypeOption } = useGetStatictisOption();
	return (
		<div className="search-bar">
			<div className="search-bar-item">
				<InputCommon
					size="large"
					placeholder="Key Word"
					onChange={handleKeyWordChange}
				/>
			</div>
			<div className="search-bar-item">
				<SelectCommon
					data={jobTypeOption}
					placeholder="Job Type"
					size="large"
					onChange={handleJobTypeChange}
				/>
			</div>
			<div className="search-bar-item">
				<SelectCommon
					data={majorOption}
					placeholder="Major"
					size="large"
					onChange={handleMajorChange}
				/>
			</div>
			<div className="search-bar-item">
				<ButtonCommon onClick={handleSearch}>Search</ButtonCommon>
			</div>
		</div>
	);
}

export default SearchBar;
