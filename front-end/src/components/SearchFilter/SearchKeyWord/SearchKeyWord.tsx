import React from "react";
import InputCommon from "../../InputCommon/InputCommon";
import { SearchOutlined } from "@ant-design/icons";

type Props = {
	handleChange: (value: string) => void;
};

const SearchKeyWord = ({ handleChange }: Props) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(event.target.value);
	};

	return (
		<div className="search-key-word">
			<div className="search-filter-title">Key Words</div>
			<div className="search-filter-input">
				<InputCommon
					size="large"
					suffix={<SearchOutlined />}
					allowClear
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default SearchKeyWord;
