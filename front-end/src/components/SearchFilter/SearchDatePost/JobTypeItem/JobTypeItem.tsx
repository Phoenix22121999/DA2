import React from "react";
import SwitchCommon from "src/components/SwitchCommon/SwitchCommon";
import "./JobTypeItem.scss";
export type JobTypeItemProps = {
	name: string;
	onChange?: (name: string, checked: boolean) => void;
};

const JobTypeItem = ({ name, onChange }: JobTypeItemProps) => {
	const handleChange = (checked: boolean) => {
		onChange && onChange(name, checked);
	};

	return (
		<div className="job-type-item">
			<div className="job-type-item-switch">
				<SwitchCommon onChange={handleChange} />
			</div>
			<div className="job-type-item-name">{name}</div>
		</div>
	);
};

export default JobTypeItem;
