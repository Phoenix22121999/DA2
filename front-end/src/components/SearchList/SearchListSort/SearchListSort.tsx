import React, { useEffect, useState } from "react";
import { SelectCommon } from "src/common";
import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
import useDebounce from "src/hooks/useDebounce";
import { useReduxDispatch } from "src/redux/redux-hook";
import { updatePrameterAndSearchPost } from "src/redux/slice/SearchPostSlide";
import {
	SORT_OPTION_TYPE,
	SORT_ORDER_ITEMS,
	SORT_TYPE_ITEMS,
} from "src/utils/contants";

import "./SearchListSort.scss";
type Props = {};

interface SelectSortOption extends Omit<SelectOptionValue, "key"> {
	key: SORT_OPTION_TYPE;
}

const option: SelectSortOption[] = [
	{
		value: "Create Date ASC",
		key: "create_date-asc",
	},
	{
		value: "Create Date DESC",
		key: "create_date-desc",
	},
];

const SearchListSort = (props: Props) => {
	const [searchParams, setSearchParams] =
		useState<SORT_OPTION_TYPE>("create_date-asc");

	const debouncedValue = useDebounce<string>(searchParams, 500);
	const dispatch = useReduxDispatch();

	useEffect(() => {
		const tmep: [SORT_TYPE_ITEMS, SORT_ORDER_ITEMS] = debouncedValue.split(
			"-"
		) as any;
		dispatch(
			updatePrameterAndSearchPost({
				payload: {
					sort_order: tmep[1],
					sort_by: tmep[0],
				},
			})
		);
	}, [debouncedValue, dispatch]);
	const handleChange = (value: any) => {
		setSearchParams(value);
	};

	return (
		<div className="search-list-sort">
			<SelectCommon
				onChange={handleChange}
				data={option as SelectOptionValue[]}
				defaultValue={option[0].value}
			/>
		</div>
	);
};

export default SearchListSort;
