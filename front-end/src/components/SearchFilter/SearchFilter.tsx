import React from "react";
import SearchKeyWord from "./SearchKeyWord/SearchKeyWord";
import "./SearchFilter.scss";
import SearchLocation from "./SearchLocation/SearchLocation";
import SearchCategory from "./SearchCategory/SearchCategory";
import SearchJobType from "./SearchJobType/SearchJobType";
import SearchDatePost from "./SearchDatePost/SearchDatePost";
import SearchSalary from "./SearchSalary/SearchSalary";
import classNames from "classnames";
type Props = {
	isOpen: boolean;
};

const SearchFilter = ({ isOpen }: Props) => {
	return (
		<div
			className={classNames("search-filter", {
				"is-open": isOpen,
			})}
		>
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
			<div className="search-filter-item">
				<SearchDatePost />
			</div>
			<div className="search-filter-item">
				<SearchSalary />
			</div>
		</div>
	);
};

export default SearchFilter;
