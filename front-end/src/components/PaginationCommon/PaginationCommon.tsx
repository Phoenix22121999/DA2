import { Pagination, PaginationProps } from "antd";
import React from "react";

interface Props extends PaginationProps {}

const PaginationCommon = (props: Props) => {
	return (
		<div className="pagination-common">
			<Pagination {...props} />
		</div>
	);
};

export default PaginationCommon;
