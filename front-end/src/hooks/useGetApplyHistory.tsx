import { useEffect, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getCandidateApplyHistory,
	getRecruiterApplyHistory,
	selectApplyHistory,
} from "src/redux/slice/ApplyHistorySlide";
import { USER_TYPE } from "src/utils/contants";
import { useUserAuth } from "./useUserAuth";

function useGetApplyHistory() {
	const [first, setFirst] = useState(true);
	const applyHistory = useReduxSelector(selectApplyHistory);
	const {
		user: { user_type_id },
	} = useUserAuth();
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (!first) {
			return;
		}
		setFirst(first);
		if (applyHistory.length > 0) {
			return;
		}
		if (user_type_id === USER_TYPE.CANDIDATE) {
			dispatch(getCandidateApplyHistory({}));
			return;
		}
		if (user_type_id === USER_TYPE.RECRUITER) {
			dispatch(getRecruiterApplyHistory({}));
			return;
		}
	}, [dispatch, first, applyHistory, user_type_id]);

	return { applyHistory };
}

export default useGetApplyHistory;
