import React from "react";
import SearchKeyWord from "./SearchKeyWord/SearchKeyWord";
import "./SearchFilter.scss";
import SearchLocation from "./SearchLocation/SearchLocation";
import SearchJobType from "./SearchJobType/SearchJobType";
import SearchCategory from "./SearchCategory/SearchCategory";
type Props = {};

const SearchFilter = (props: Props) => {
	return (
		<div className="search-filter">
			<div className="search-filter-item">
				<SearchKeyWord />
			</div>
			<div className="search-filter-item">
				<SearchLocation />
			</div>
			<div className="search-filter-item">
				<SearchCategory />
			</div>
			<div className="search-filter-item">
				<SearchJobType />
			</div>
		</div>
	);
};

export default SearchFilter;
