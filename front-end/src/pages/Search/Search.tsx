import React from "react";
import SearchFilter from "src/components/SearchFilter/SearchFilter";
import "./Search.scss";
type Props = {};

const Search = (props: Props) => {
	return (
		<div className="search-page">
			<div className="container">
				<div className="search-page-inner">
					<div className="search-page-filter">
						<SearchFilter />
					</div>
					<div className="search-page-list"></div>
				</div>
			</div>
		</div>
	);
};

export default Search;
