import { useEffect, useState, useMemo } from "react";
import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { selectCVList } from "src/redux/slice/CVSlide";
import { getListJobType } from "src/redux/slice/JobTypeSlide";

function useGetCVList() {
	const [first, setFirst] = useState(true);
	const cvList = useReduxSelector(selectCVList);
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (first) {
			if (cvList.length === 0) {
				dispatch(getListJobType({ payload: {} }));
			}
			setFirst(false);
		}
	}, [dispatch, first, cvList]);

	const cvsOption: SelectOptionValue[] = useMemo(() => {
		return cvList.map((cv) => {
			return {
				value: cv.file_name,
				key: cv.id,
			};
		});
	}, [cvList]);

	return { cvList, cvsOption };
}

export default useGetCVList;
