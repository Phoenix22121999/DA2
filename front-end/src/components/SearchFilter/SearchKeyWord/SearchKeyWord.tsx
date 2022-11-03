import React from "react";
import InputCommon from "../../InputCommon/InputCommon";
import { SearchOutlined } from "@ant-design/icons";
type Props = {};

const SearchKeyWord = (props: Props) => {
	return (
		<div className="search-key-word">
			<div className="search-filter-title">Key Words</div>
			<div className="search-filter-input">
				<InputCommon size="large" suffix={<SearchOutlined />} />
			</div>
		</div>
	);
};

export default SearchKeyWord;
