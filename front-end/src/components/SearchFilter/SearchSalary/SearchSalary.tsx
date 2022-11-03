import React, { useState } from "react";
import { RangeSliderCommon } from "src/components/SliderCommon/SliderCommon";
import type { SliderMarks } from "antd/es/slider";
import InputNumberCommon from "src/components/InputNumberCommon/InputNumberCommon";
import "./SearchSalary.scss";
type SearchSalaryProps = {};

const sliderFormatter = (value: number | undefined) =>
	new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 9,
	}).format(value || 0);

const inputNUmberFormatter = (value: number | undefined | string) =>
	new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 9,
	}).format(Number(value) || 0);

const marks: SliderMarks = {
	// 0: formatter(0),
	// 25000000: formatter(25000000),
	// 50000000: formatter(50000000),
};

const SearchSalary = (props: SearchSalaryProps) => {
	const [formTo, setFormTo] = useState<[number, number]>([0, 25000000]);
	const handleSliderChange = (value: [number, number]) => {
		setFormTo(value);
	};
	const handleFormChange = (value: number | string | null) => {
		setFormTo([Number(value) || 0, formTo[1]]);
	};
	const handleToChange = (value: number | string | null) => {
		setFormTo([formTo[0], Number(value) || 0]);
	};

	return (
		<div className="search-salary">
			<div className="search-filter-title">Salary Range</div>
			<div className="search-filter-input">
				<div className="search-salary-slider">
					<RangeSliderCommon
						marks={marks}
						min={0}
						max={50000000}
						range
						defaultValue={[0, 5000000]}
						step={500000}
						tooltip={{ formatter: sliderFormatter }}
						onChange={handleSliderChange}
						value={formTo}
					/>
				</div>
				<div className="search-salary-inputs">
					<div className="search-salary-input-item search-salary-item-title">
						Form:
					</div>
					<div className="search-salary-input-item">
						<InputNumberCommon
							value={formTo[0]}
							onChange={handleFormChange}
							min={0}
							max={50000000}
							step={500000}
							formatter={inputNUmberFormatter}
						/>
					</div>
					<div className="search-salary-input-item search-salary-item-title">
						To:
					</div>
					<div className="search-salary-input-item">
						<InputNumberCommon
							value={formTo[1]}
							onChange={handleToChange}
							formatter={inputNUmberFormatter}
							min={0}
							max={50000000}
							step={500000}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchSalary;
