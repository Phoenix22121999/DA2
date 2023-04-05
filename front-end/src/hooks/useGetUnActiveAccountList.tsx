import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import useEffectOnce from "./useEffectOne";
import { useEffect, useState } from "react";
import {
	getAccountList,
	getUnActiveAccountList,
	selectUnacitveAccountList,
	selectUnacitveAccountTotal,
} from "src/redux/slice/AccountSilce";

function useGetUnActiveAccountList() {
	const accountList = useReduxSelector(selectUnacitveAccountList);
	const total = useReduxSelector(selectUnacitveAccountTotal);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const dispatch = useReduxDispatch();
	useEffectOnce(() => {
		if (accountList.length === 0) {
			dispatch(
				getUnActiveAccountList({
					payload: { page: 1, key_word: search },
				})
			);
		}
	});

	useEffect(() => {
		dispatch(
			getAccountList({
				payload: {
					page: 1,
					key_word: search,
				},
			})
		);
	}, [search, dispatch]);

	const onChangePagination = (page: number, pageSize: number) => {
		setPage(page);
		dispatch(
			getAccountList({
				payload: {
					page: page,
					key_word: search,
				},
			})
		);
	};

	const onSearch = (value: string) => {
		setSearch(value);
	};

	return {
		accountList,
		total,
		onChangePagination,
		onSearch,
		page,
	};
}

export default useGetUnActiveAccountList;
