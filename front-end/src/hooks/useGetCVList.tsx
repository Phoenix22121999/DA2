import { useEffect, useState, useMemo } from "react";
import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListCV, selectCVList } from "src/redux/slice/CVSlide";

function useGetCVList() {
	const [first, setFirst] = useState(true);
	const cvList = useReduxSelector(selectCVList);
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (first) {
			if (cvList.length === 0) {
				dispatch(getListCV({}));
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
