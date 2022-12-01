import React from "react";
import { Radio } from "antd";
import type { RadioChangeEvent, RadioGroupProps } from "antd";
import classNames from "classnames";
import "./ButtonRadioGroupCommon.scss";
interface Props extends Omit<RadioGroupProps, "onChange"> {
	data: RadioValue[];
	onChange?: (value: string | number) => void;
}
export type RadioValue = {
	value: string;
	key: string;
};

export const ButtonRadioGroupCommon = ({
	data,
	className,
	onChange,
	...prop
}: Props) => {
	// const [value, setValue] = useState(1);

	const handleChange = (e: RadioChangeEvent) => {
		onChange && onChange(e.target.value);
	};
	return (
		<div
			className={classNames("button-radio-group-common", {
				[`${className}`]: className,
			})}
		>
			<Radio.Group onChange={handleChange} {...prop}>
				{data.map((item) => {
					return (
						<Radio key={item.key} value={item.key}>
							{item.value}
						</Radio>
					);
				})}
			</Radio.Group>
		</div>
	);
};
export default ButtonRadioGroupCommon;
