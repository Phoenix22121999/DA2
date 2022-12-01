import React, { useState } from "react";
import SearchFilter from "src/components/SearchFilter/SearchFilter";
import SearchList from "src/components/SearchList/SearchList";
import { FilterOutlined } from "@ant-design/icons";
import "./Search.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
type Props = {};

const Search = (props: Props) => {
	const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
	const toggleFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	return (
		<div className="search-page">
			<div className="search-page-banner">
				<div className="search-banner-title">Find Your Job</div>
				<div className="search-banner-breadcrumb">
					<Link to={"/"}>Home</Link> / Search
				</div>
			</div>
			<div className="container">
				<React.Suspense fallback={<SuspenseLoading size="large" />}>
					<div className="search-page-inner">
						<div className={classNames("search-page-filter")}>
							<div
								className="toogle-search-filter"
								onClick={toggleFilter}
							>
								<span className="filter-test">
									{isFilterOpen
										? "Close Filter"
										: "Open Filter"}
								</span>
								<FilterOutlined
									rotate={isFilterOpen ? 180 : 0}
								/>
							</div>
							<SearchFilter isOpen={isFilterOpen} />
						</div>
						<div className="search-page-list">
							<SearchList />
						</div>
					</div>
				</React.Suspense>
			</div>
		</div>
	);
};

export default Search;
