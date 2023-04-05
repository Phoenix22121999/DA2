import { useEffect, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getCandidateApplyHistory,
	getRecruiterApplyHistory,
	selectApplyHistory,
	selectHistoryUserType,
	setHistoryUserTypeId,
} from "src/redux/slice/ApplyHistorySlide";
import { USER_TYPE } from "src/utils/contants";
import { useUserAuth } from "./useUserAuth";

function useGetApplyHistory(isDisable: boolean = false) {
	const [first, setFirst] = useState(true);
	const applyHistory = useReduxSelector(selectApplyHistory);
	const lastID = useReduxSelector(selectHistoryUserType);

	const {
		user: { user_type_id },
	} = useUserAuth();
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (!first) {
			return;
		}
		if (isDisable) {
			return;
		}
<<<<<<< HEAD
		setFirst(false);
=======
		setFirst(first);
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
		if (lastID === user_type_id && applyHistory.length > 0) {
			return;
		}
		dispatch(setHistoryUserTypeId(user_type_id || 0));
		if (user_type_id === USER_TYPE.CANDIDATE) {
			dispatch(
				getCandidateApplyHistory({
					payload: {
						item_per_page: 99999,
					},
				})
			);
			return;
		}
		if (user_type_id === USER_TYPE.RECRUITER) {
			dispatch(
				getRecruiterApplyHistory({
					payload: {
						item_per_page: 99999,
					},
				})
			);
			return;
		}
	}, [dispatch, first, applyHistory, user_type_id, isDisable, lastID]);

	return { applyHistory: isDisable ? [] : applyHistory };
}

export default useGetApplyHistory;
