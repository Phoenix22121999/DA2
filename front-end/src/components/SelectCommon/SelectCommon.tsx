import React from "react";
import { Select, SelectProps } from "antd";
import "./SelectCommon.scss";
const { Option } = Select;

export type OptionValue = {
	value: string;
	key: string;
};

interface SelectCommonProps extends SelectProps {
	data: OptionValue[];
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
