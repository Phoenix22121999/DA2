import { Table, TableProps } from "antd";
import React from "react";

interface TableCommonProps<T> extends TableProps<T> {}

const TableCommon = <T extends object>(props: TableCommonProps<T>) => {
	return (
		<div className="table-common">
			<Table {...props}></Table>
		</div>
	);
};

export default TableCommon;
