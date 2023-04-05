import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import useEffectOnce from "./useEffectOne";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import {
	getAccountList,
	selectAccountList,
	selectAccountTotal,
=======
import {
	getAccountList,
	selectAccountList,
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
	selectAccountListStatus,
} from "src/redux/slice/AccountSilce";

function useGetAccountList() {
	const accountList = useReduxSelector(selectAccountList);
	const accountListStatus = useReduxSelector(selectAccountListStatus);
<<<<<<< HEAD
	const total = useReduxSelector(selectAccountTotal);
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const dispatch = useReduxDispatch();
	useEffectOnce(() => {
		if (accountList.length === 0) {
			dispatch(
				getAccountList({
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
		accountListStatus,
		total,
		onChangePagination,
		onSearch,
		page,
	};
=======

	const dispatch = useReduxDispatch();
	useEffectOnce(() => {
		if (accountList.length === 0) {
			dispatch(getAccountList({}));
		}
	});

	return { accountList, accountListStatus };
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
}

export default useGetAccountList;
