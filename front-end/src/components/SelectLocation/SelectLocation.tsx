import React from "react";
// import { SelectCommon } from "src/common";
import useGetLocation from "src/hooks/useGetLocation";
import { Form } from "antd";
import "./SelectLocation.scss";
import SelectCommon from "src/common/SelectCommon/SelectCommon";
type Props = {
	initialValue?: {
		city_id?: number | null;
		district_id?: number | null;
		ward_id?: number | null;
	};
};

const SelectLocation = (props: Props) => {
	const {
		provinceId,
		provincesOption,
		onProvinceChange,
		districtId,
		districtsOption,
		onDistrictChange,
		wardId,
		wardsOption,
		onWardChange,
	} = useGetLocation();
	// const [form] = Form.useForm();
	return (
		<>
			<Form.Item
				label="Province"
				name="city_id"
				rules={[
					{
						required: true,
						message: "Please choose your province!",
					},
				]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={provincesOption.length < 1}
					data={provincesOption}
					onChange={onProvinceChange}
					value={provinceId}
					placeholder="Province"
				/>
			</Form.Item>
			<Form.Item
				label="Dictrict"
				name="district_id"
				rules={[
					{
						required: true,
						message: "Please choose your dictrict!",
					},
				]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={districtsOption.length < 1}
					data={districtsOption}
					onChange={onDistrictChange}
					value={districtId}
					placeholder="Dictrict"
				/>
			</Form.Item>
			<Form.Item
				label="Ward"
				name="ward_id"
				rules={[
					{
						required: true,
						message: "Please choose your ward!",
					},
				]}
			>
				<SelectCommon
					showSearch
					allowClear
					disabled={wardsOption.length < 1}
					data={wardsOption}
					onChange={onWardChange}
					value={wardId}
					placeholder="Ward"
				/>
			</Form.Item>
		</>
	);
};

export default SelectLocation;
