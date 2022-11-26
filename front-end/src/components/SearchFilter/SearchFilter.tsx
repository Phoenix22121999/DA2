import React, { useEffect, useState } from "react";
import SearchKeyWord from "./SearchKeyWord/SearchKeyWord";
import "./SearchFilter.scss";
import SearchLocation from "./SearchLocation/SearchLocation";
import SearchCategory from "./SearchCategory/SearchCategory";
import SearchJobType from "./SearchJobType/SearchJobType";
import SearchDatePost from "./SearchDatePost/SearchDatePost";
import SearchSalary from "./SearchSalary/SearchSalary";
import classNames from "classnames";
import { SearchParameter } from "src/types/SearchType";
import useDebounce from "src/hooks/useDebounce";
import { useReduxDispatch } from "src/redux/redux-hook";
import { updatePrameterAndSearchPost } from "src/redux/slice/SearchPostSlide";
type Props = {
	isOpen: boolean;
};

const SearchFilter = ({ isOpen }: Props) => {
	const [searchParams, setSearchParams] = useState<SearchParameter>({});

	const debouncedValue = useDebounce<SearchParameter>(searchParams, 1000);
	const dispatch = useReduxDispatch();

	const handleKeyWordChange = (value: string) => {
		setSearchParams({ ...searchParams, key_word: value });
	};
	const handleSalaryChange = (value: [number, number]) => {
		setSearchParams({
			...searchParams,
			from_value: value[0],
			to_value: value[1],
		});
	};

	useEffect(() => {
		dispatch(
			updatePrameterAndSearchPost({
				payload: debouncedValue,
			})
		);
	}, [debouncedValue, dispatch]);

	return (
		<div
			className={classNames("search-filter", {
				"is-open": isOpen,
			})}
		>
			<div className="search-filter-item">
				<SearchKeyWord handleChange={handleKeyWordChange} />
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
				<SearchSalary handleChange={handleSalaryChange} />
			</div>
		</div>
	);
};

export default SearchFilter;
