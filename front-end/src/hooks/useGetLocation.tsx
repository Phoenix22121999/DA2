import { useEffect, useState, useMemo, useCallback } from "react";
import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";

import {
	getDistrict,
	getProvinces,
	getWard,
	selectDistrict,
	selectProvinces,
	selectWard,
} from "src/redux/slice/LocationSlide";
import { LocationCode } from "src/types/LocationType";

function useGetLocation(initialValue?: LocationCode) {
	const [first, setFirst] = useState(true);
	const [provinceCode, setProvinceCode] = useState<string>();
	const [districtCode, setDistrictCode] = useState<string>();
	const [wardCode, setWardCode] = useState<string>();

	const provinceList = useReduxSelector(selectProvinces);
	const districtList = useReduxSelector(selectDistrict);
	const wardList = useReduxSelector(selectWard);
	const dispatch = useReduxDispatch();
	useEffect(() => {
		if (first) {
			if (provinceList.length === 0) {
				dispatch(getProvinces({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, provinceList]);

	// useEffect(() => {
	// 	if (initialValue) {
	// 	}
	// }, [initialValue]);

	const provincesOption: SelectOptionValue[] = useMemo(() => {
		return provinceList.map((province) => {
			return {
				value: province.name,
				key: province.code,
			};
		});
	}, [provinceList]);

	const districtsOption: SelectOptionValue[] = useMemo(() => {
		return districtList.map((district) => {
			return {
				value: district.name,
				key: district.code,
			};
		});
	}, [districtList]);

	const wardsOption: SelectOptionValue[] = useMemo(() => {
		return wardList.map((ward) => {
			return {
				value: ward.name,
				key: ward.code,
			};
		});
	}, [wardList]);

	useEffect(() => {
		if (provinceCode) {
			dispatch(getDistrict({ payload: provinceCode }));
		}
	}, [provinceCode, dispatch]);

	useEffect(() => {
		if (districtCode) {
			dispatch(getWard({ payload: districtCode }));
		}
	}, [districtCode, dispatch]);

	const onProvinceChange = useCallback((provinceCode: string | undefined) => {
		setProvinceCode(provinceCode);
	}, []);

	const onDistrictChange = useCallback((districtCode: string | undefined) => {
		setDistrictCode(districtCode);
	}, []);

	const onWardChange = useCallback((wardCode: string | undefined) => {
		setWardCode(wardCode);
	}, []);

	return {
		provincesOption,
		districtsOption,
		wardsOption,
		onProvinceChange,
		onDistrictChange,
		onWardChange,
		provinceCode,
		districtCode,
		wardCode,
	};
}

export default useGetLocation;
