import { Table, TableProps } from "antd";
import React from "react";

interface TableCommonProps<T> extends TableProps<T> {}

const TableCommon = <T extends object>({
	children,
	...props
}: TableCommonProps<T>) => {
	return (
		<div className="table-common">
			<Table {...props}>{children}</Table>
		</div>
	);
};
export type TableCommonType = typeof TableCommon;
export const { Column: ColumnCommon, ColumnGroup } = Table;
export default TableCommon;
