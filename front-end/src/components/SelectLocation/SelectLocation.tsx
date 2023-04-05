import React, { useEffect, useCallback } from "react";
// import { SelectCommon } from "src/common";
import useGetLocation from "src/hooks/useGetLocation";
import { Form, FormInstance } from "antd";
import "./SelectLocation.scss";
import SelectCommon from "src/common/SelectCommon/SelectCommon";
import { LocationCode } from "src/types/LocationType";
type Props = {
	initialValue?: LocationCode;
	onSetFormValue?: (name: string, value: any) => void;
	form: FormInstance;
};

const SelectLocation = ({ initialValue, form }: Props) => {
	const onSetFormValue = (name: string, value: any) => {
		form.setFieldValue(name, value);
	};

	const {
		provincesOption,
		onProvinceChange,
		districtsOption,
		onDistrictChange,
		wardsOption,
		onWardChange,
	} = useGetLocation(initialValue);

	const onInitProvince = useCallback(() => {
		if (initialValue && initialValue?.province_code) {
			onProvinceChange(initialValue.province_code.toString());
		}
	}, [onProvinceChange, initialValue]);

	const onInitDistrict = useCallback(() => {
		if (initialValue && initialValue?.district_code) {
			onDistrictChange(initialValue.district_code.toString());
		}
	}, [onDistrictChange, initialValue]);

	const onInitWard = useCallback(() => {
		if (initialValue && initialValue?.ward_code) {
			onWardChange(initialValue.ward_code.toString());
		}
	}, [onWardChange, initialValue]);

	useEffect(() => {
		onInitProvince();
		onInitDistrict();
		onInitWard();
	}, [initialValue, onInitProvince, onInitDistrict, onInitWard]);

	const handleProvinceChange = (e: string) => {
		onSetFormValue && onSetFormValue("district_code", undefined);
		onSetFormValue && onSetFormValue("ward_code", undefined);
		onProvinceChange(e);

		// form.setFieldValue("district_code", undefined);
	};

	const handleDictrictChange = (e: string) => {
		onSetFormValue && onSetFormValue("ward_code", undefined);
		onDistrictChange(e);
		// form.setFieldValue("district_code", undefined);
	};

	return (
		<>
			<Form.Item
				label="Province"
				name="province_code"
				// rules={[
				// 	{
				// 		required: true,
				// 		message: "Please choose your province!",
				// 	},
				// ]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={provincesOption.length < 1}
					data={provincesOption}
					onChange={handleProvinceChange}
					placeholder="Province"
				/>
			</Form.Item>
			<Form.Item
				label="Dictrict"
				name="district_code"
				// rules={[
				// 	{
				// 		required: true,
				// 		message: "Please choose your dictrict!",
				// 	},
				// ]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={districtsOption.length < 1}
					data={districtsOption}
					onChange={handleDictrictChange}
					placeholder="Dictrict"
				/>
			</Form.Item>
			<Form.Item
				label="Ward"
				name="ward_code"
				// rules={[
				// 	{
				// 		required: true,
				// 		message: "Please choose your ward!",
				// 	},
				// ]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={wardsOption.length < 1}
					data={wardsOption}
					onChange={onWardChange}
					placeholder="Ward"
				/>
			</Form.Item>
		</>
	);
};

export default SelectLocation;
