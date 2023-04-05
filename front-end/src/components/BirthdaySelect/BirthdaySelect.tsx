import { SelectCommon } from "src/common";
import { DAY_OPTION, MONTH_OPTION, YEAR_OPTION } from "src/utils/contants";
import "./BirthdaySelect.scss";
export interface BirthdayValue {
	birthday?: string;
	birthday_month?: string;
	birthday_year?: string;
}

type BirthdaySelectProps = {
	isRecruiter: boolean;
	value?: BirthdayValue;
	onChange?: (value: BirthdayValue) => void;
};
const BirthdaySelect = ({
	isRecruiter,
	onChange,
	value = {},
}: BirthdaySelectProps) => {
	const handleDayChange = (birthday: string) => {
		onChange?.({ ...value, birthday: birthday.toString() });
	};
	const handleMonthChange = (birthday_month: string) => {
		onChange?.({ ...value, birthday_month: birthday_month.toString() });
	};
	const handleYearChange = (birthday_year: string) => {
		onChange?.({ ...value, birthday_year: birthday_year.toString() });
	};
	return (
		<div className="birthday-select-warpper">
			<SelectCommon
				data={DAY_OPTION}
				onChange={handleDayChange}
				placeholder="Day"
				allowClear
				defaultValue={value?.birthday}
			/>

			<SelectCommon
				data={MONTH_OPTION}
				onChange={handleMonthChange}
				placeholder="Month"
				allowClear
				defaultValue={value?.birthday_month}
			/>

			<SelectCommon
				data={YEAR_OPTION}
				onChange={handleYearChange}
				placeholder="Year"
				allowClear
				defaultValue={value?.birthday_year}
			/>
		</div>
	);
};
export default BirthdaySelect;
