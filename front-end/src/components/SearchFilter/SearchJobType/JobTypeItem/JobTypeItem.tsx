import React from "react";
import { SwitchCommon } from "src/common";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectSearchParameter } from "src/redux/slice/SearchPostSlide";
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

	const s = useReduxSelector(selectSearchParameter);

	return (
		<div className="job-type-item">
			<div className="job-type-item-switch">
				<SwitchCommon
					onChange={handleChange}
					defaultChecked={s.list_job_type?.includes(
						itemKey.toString()
					)}
				/>
			</div>
			<div className="job-type-item-name">{value}</div>
		</div>
	);
};

export default JobTypeItem;
