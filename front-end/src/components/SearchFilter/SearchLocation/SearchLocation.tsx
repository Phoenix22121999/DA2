import React from "react";
import { SelectCommon } from "src/common";
import useGetLocation from "src/hooks/useGetLocation";
import "./SearchLocation.scss";
import { LocationCode } from "src/types/LocationType";
type Props = {
	handleChange: (value: LocationCode) => void;
};

const SearchLocation = ({ handleChange }: Props) => {
	const {
		provinceCode,
		provincesOption,
		onProvinceChange,
		districtCode,
		districtsOption,
		onDistrictChange,
		wardCode,
		wardsOption,
		onWardChange,
	} = useGetLocation();

	const handleProvinceChange = (e: string) => {
		handleChange({
			province_code: e,
			district_code: undefined,
			ward_code: undefined,
		});
		onProvinceChange(e);
		onDistrictChange(undefined);
		onWardChange(undefined);
		// form.setFieldValue("district_code", undefined);
	};

	const handleDictrictChange = (e: string) => {
		handleChange({
			province_code: provinceCode,
			district_code: e,
			ward_code: undefined,
		});
		onDistrictChange(e);
		onWardChange(undefined);
		// form.setFieldValue("district_code", undefined);
	};

	const handleWardChange = (e: string) => {
		handleChange({
			province_code: provinceCode,
			district_code: districtCode,
			ward_code: e,
		});
		onWardChange(e);
		// form.setFieldValue("district_code", undefined);
	};

	return (
		<div className="search-location">
			<div className="search-filter-title">Location</div>
			<div className="search-filter-input">
				<div className="search-filter-sub-title">Province</div>
				<SelectCommon
					showSearch
					allowClear
					disabled={provincesOption.length < 1}
					data={provincesOption}
					onChange={handleProvinceChange}
					placeholder="Province"
					value={provinceCode}
				/>
				<div className="search-filter-sub-title">District</div>
				<SelectCommon
					showSearch
					allowClear
					disabled={districtsOption.length < 1}
					data={districtsOption}
					onChange={handleDictrictChange}
					placeholder="Dictrict"
					value={districtCode}
				/>

				<div className="search-filter-sub-title">Ward</div>
				<SelectCommon
					showSearch
					allowClear
					disabled={wardsOption.length < 1}
					data={wardsOption}
					onChange={handleWardChange}
					placeholder="Ward"
					value={wardCode}
				/>
			</div>
		</div>
	);
};

export default SearchLocation;
