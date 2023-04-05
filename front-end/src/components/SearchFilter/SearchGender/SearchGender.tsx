import React from "react";
import { SelectCommon } from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSearchParameter } from "src/redux/slice/SearchPostSlide";
import { GENDER_OPTION } from "src/utils/contants";

type Props = {
	handleChange: (value: number) => void;
};

const SearchGender = ({ handleChange }: Props) => {
	const s = useReduxSelector(selectSearchParameter);

	return (
		<div className="search-category">
			<div className="search-filter-title">Gender</div>
			<div className="search-filter-input">
				<React.Suspense fallback={<SuspenseLoading size="xsmall" />}>
					<SelectCommon
						data={GENDER_OPTION}
						size="large"
						showSearch
						allowClear
						onChange={handleChange}
						defaultValue={s.gender}
					/>
				</React.Suspense>
			</div>
		</div>
	);
};

export default SearchGender;
