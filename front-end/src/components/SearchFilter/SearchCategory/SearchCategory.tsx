import React from "react";
import { SelectCommon } from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import useGetStatictisOption from "src/hooks/useGetStatictisOption";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSearchParameter } from "src/redux/slice/SearchPostSlide";

type Props = {
	handleChange: (value: string[]) => void;
};

const SearchCategory = ({ handleChange }: Props) => {
	const { majorOption } = useGetStatictisOption();
	const s = useReduxSelector(selectSearchParameter);

	return (
		<div className="search-category">
			<div className="search-filter-title">Major</div>
			<div className="search-filter-input">
				<React.Suspense fallback={<SuspenseLoading size="xsmall" />}>
					<SelectCommon
						mode="multiple"
						data={majorOption}
						size="large"
						showSearch
						allowClear
						onChange={handleChange}
						defaultValue={s.list_major}
					/>
				</React.Suspense>
			</div>
		</div>
	);
};

export default SearchCategory;
