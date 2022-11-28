import React from "react";
import { Radio } from "antd";
import type { RadioChangeEvent, RadioGroupProps } from "antd";
import classNames from "classnames";
import "./ButtonRadioGroupCommon.scss";
interface Props extends RadioGroupProps {
	data: RadioValue[];
	// onChange: ()
}
export type RadioValue = {
	value: string;
	key: string;
};

export const ButtonRadioGroupCommon = ({ data, className }: Props) => {
	// const [value, setValue] = useState(1);

	const onChange = (e: RadioChangeEvent) => {
		// console.log("radio checked", e.target.value);
		// setValue(e.target.value);
	};
	return (
		<div
			className={classNames("button-radio-group-common", {
				[`${className}`]: className,
			})}
		>
			<Radio.Group onChange={onChange}>
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
