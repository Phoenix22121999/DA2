import React from "react";
import InputCommon from "../../../common/InputCommon/InputCommon";
import { SearchOutlined } from "@ant-design/icons";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSearchParameter } from "src/redux/slice/SearchPostSlide";

type Props = {
	handleChange: (value: string) => void;
};

const SearchKeyWord = ({ handleChange }: Props) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event.target.value);
	};

	const s = useReduxSelector(selectSearchParameter);

	return (
		<div className="search-key-word">
			<div className="search-filter-title">Key Words</div>
			<React.Suspense fallback={<SuspenseLoading size="small" />}>
				<div className="search-filter-input">
					<InputCommon
						defaultValue={s.key_word}
						size="large"
						suffix={<SearchOutlined />}
						allowClear
						onChange={onChange}
					/>
				</div>
			</React.Suspense>
		</div>
	);
};

export default SearchKeyWord;
