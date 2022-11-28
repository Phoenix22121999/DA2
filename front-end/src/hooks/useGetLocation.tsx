import { useEffect, useState, useMemo } from "react";
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

function useGetLocation() {
	const [first, setFirst] = useState(true);
	const [provinceId, setProvinceId] = useState<string>();
	const [districtId, setDistrictId] = useState<string>();
	const [wardId, setWardId] = useState<string>();

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
		if (provinceId) {
			dispatch(getDistrict({ payload: provinceId }));
		}
	}, [provinceId, dispatch]);

	useEffect(() => {
		if (districtId) {
			dispatch(getWard({ payload: districtId }));
		}
	}, [districtId, dispatch]);

	const onProvinceChange = (provinceId: string) => {
		console.log(provinceId);

		setProvinceId(provinceId);
	};

	const onDistrictChange = (districtId: string) => {
		setDistrictId(districtId);
	};

	const onWardChange = (wardId: string) => {
		setWardId(wardId);
	};

	return {
		provincesOption,
		districtsOption,
		wardsOption,
		onProvinceChange,
		onDistrictChange,
		onWardChange,
		provinceId,
		districtId,
		wardId,
	};
}

export default useGetLocation;
