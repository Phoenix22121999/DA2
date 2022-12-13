import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import useEffectOnce from "./useEffectOne";
import {
	getAccountList,
	selectAccountList,
	selectAccountListStatus,
} from "src/redux/slice/AccountSilce";

function useGetAccountList() {
	const accountList = useReduxSelector(selectAccountList);
	const accountListStatus = useReduxSelector(selectAccountListStatus);

	const dispatch = useReduxDispatch();
	useEffectOnce(() => {
		if (accountList.length === 0) {
			dispatch(getAccountList({}));
		}
	});

	return { accountList, accountListStatus };
}

export default useGetAccountList;
