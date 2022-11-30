import React from "react";
import { SwitchCommon } from "src/common";
import "./JobTypeItem.scss";
export type JobTypeItemProps = {
	itemKey: string | number;
	value: string;
	onChange?: (name: string | number, checked: boolean) => void;
};

const JobTypeItem = ({ itemKey, value, onChange }: JobTypeItemProps) => {
	const handleChange = (checked: boolean) => {
		onChange && onChange(itemKey, checked);
	};

	return (
		<div className="job-type-item">
			<div className="job-type-item-switch">
				<SwitchCommon onChange={handleChange} />
			</div>
			<div className="job-type-item-name">{value}</div>
		</div>
	);
};

export default JobTypeItem;
