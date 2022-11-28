import { useEffect, useState, useMemo } from "react";
import { SelectOptionValue } from "src/components/SelectCommon/SelectCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getListJobType,
	selectJobTypeList,
} from "src/redux/slice/JobTypeSlide";
import { getListMajor, selectMajorList } from "src/redux/slice/MajorSlide";

function useGetStatictisOption() {
	const [first, setFirst] = useState(true);
	const jobTypeList = useReduxSelector(selectJobTypeList);
	const majorList = useReduxSelector(selectMajorList);
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (first) {
			if (jobTypeList.length === 0) {
				dispatch(getListJobType({ payload: {} }));
			}
			if (majorList.length === 0) {
				dispatch(getListMajor({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, jobTypeList, majorList]);
	const jobTypeOption: SelectOptionValue[] = useMemo(() => {
		return jobTypeList.map((jobType) => {
			return {
				value: jobType.job_type_name,
				key: jobType.id,
			};
		});
	}, [jobTypeList]);
	const majorOption: SelectOptionValue[] = useMemo(() => {
		return majorList.map((major) => {
			return {
				value: major.majors_name,
				key: major.id,
			};
		});
	}, [majorList]);
	return { jobTypeOption, majorOption, jobTypeList, majorList };
}

export default useGetStatictisOption;
