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
import { LocationCode } from "src/types/LocationType";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
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

	const handleLocationChange = (value: LocationCode) => {
		setSearchParams({
			...searchParams,
			...(value.province_code
				? {
						province_code: value.province_code.toString(),
				  }
				: {
						province_code: undefined,
				  }),
			...(value.district_code
				? {
						district_code: value.district_code.toString(),
				  }
				: {
						district_code: undefined,
				  }),
			...(value.ward_code
				? { ward_code: value.ward_code.toString() }
				: {
						ward_code: undefined,
				  }),
		});
	};

	const handleMajorChange = (value: string[]) => {
		setSearchParams({
			...searchParams,
			list_major: value,
		});
	};

	const handleJobTypeChange = (value: string[]) => {
		setSearchParams({
			...searchParams,
			list_job_type: value,
		});
	};

	const handleDatePostChange = (value: string) => {
		setSearchParams({
			...searchParams,
			date_post: value,
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
			<React.Suspense fallback={<SuspenseLoading size="medium" />}>
				<div className="search-filter-item">
					<SearchKeyWord handleChange={handleKeyWordChange} />
				</div>
				<div className="search-filter-item">
					<SearchLocation handleChange={handleLocationChange} />
				</div>
				<div className="search-filter-item">
					<SearchCategory handleChange={handleMajorChange} />
				</div>
				<div className="search-filter-item">
					<SearchJobType handleChange={handleJobTypeChange} />
				</div>
				<div className="search-filter-item">
					<SearchDatePost handleChange={handleDatePostChange} />
				</div>
				<div className="search-filter-item">
					<SearchSalary handleChange={handleSalaryChange} />
				</div>
			</React.Suspense>
		</div>
	);
};

export default SearchFilter;
