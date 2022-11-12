import React from "react";
import { Select, SelectProps } from "antd";
import "./SelectCommon.scss";
const { Option } = Select;

export type SelectOptionValue = {
	value: string;
	key: string | number;
};

interface SelectCommonProps extends SelectProps {
	data: SelectOptionValue[];
}

const SelectCommon = ({ data, ...props }: SelectCommonProps) => {
	return (
		<Select
			{...props}
			className={"select-common"}
			filterOption={(input, option) =>
				(option!.children as unknown as string)
					.toLowerCase()
					.includes(input.toLowerCase())
			}
		>
			{data.map((item) => {
				return <Option key={item.key}>{item.value}</Option>;
			})}
		</Select>
	);
};

export default SelectCommon;
