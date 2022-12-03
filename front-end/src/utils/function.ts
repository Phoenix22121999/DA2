import { NewPostFormStepOne } from "src/subpage/PostJob/StepOne/StepOne";
import { CreatePostParameters, UpdatePostParameters } from "src/types/PostType";

export const serializeForm = (data: any) => {
	let rs = "";
	for (const k in data) {
		rs += `${k}=${encodeURIComponent(data[k])}&`;
	}
	return rs.substr(0, rs.length - 1); // remove '&' at the end
};

export const sliderFormatter = (value: number | undefined) =>
	new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 9,
	}).format(value || 0);

export const inputNumberFormatter = (value: number | undefined | string) =>
	new Intl.NumberFormat("vi-VN", {
		style: "currency",
		currency: "VND",
		maximumFractionDigits: 9,
	}).format(Number(value) || 0);

export function inputNumberParser(
	stringNumber?: string,
	locale: string = "vi-VN"
) {
	// var thousandSeparator = Intl.NumberFormat(locale)
	// 	.formatToParts(11111)
	// 	.replace(/\p{Number}/gu, "");
	// var decimalSeparator = Intl.NumberFormat(locale)
	// 	.format(1.1)
	// 	.replace(/\p{Number}/gu, "");

	const thousandSeparator =
		Intl.NumberFormat(locale).formatToParts(11111)[1].value;
	const decimalSeparator =
		Intl.NumberFormat(locale).formatToParts(1.1)[1].value;

	return parseFloat(
		stringNumber!
			.replace(new RegExp("\\" + thousandSeparator, "g"), "")
			.replace(new RegExp("\\" + decimalSeparator), ".")
	);
}
export const searchParameterBuilder = (searchParameter: {
	[key: string]: any;
}) => {
	const parameter = { ...searchParameter };

	Object.entries(parameter).forEach(([key, value]) => {
		if (value === undefined) {
			delete parameter[key];
		}
	});

	const searchParams = new URLSearchParams(parameter as any);
	return searchParams.toString();
};

export const formValueToCreatePostParameters = (
	value: NewPostFormStepOne
): Partial<CreatePostParameters> => {
	return {
		title: value.title,
		from_value: value.salary[0],
		to_value: value.salary[1],
		gender: Number(value.gender),
		province_code: value.province_code,
		district_code: value.district_code,
		ward_code: value.ward_code,
		address: value.address,
		list_job_type: value.jobTypeList.map((id) => {
			return { job_type_id: id };
		}),
		list_major: value.majorList.map((id) => {
			return { majors_id: id };
		}),
	};
};

export const formValueToUpdatePostParameters = (
	id: number,
	value: NewPostFormStepOne,
	content: string
): UpdatePostParameters => {
	return {
		post_id: id,
		content: content,
		title: value.title,
		from_value: value.salary[0],
		to_value: value.salary[1],
		province_code: value.province_code,
		district_code: value.district_code,
		ward_code: value.ward_code,
		address: value.address,
		gender: Number(value.gender),
		list_job_type: value.jobTypeList.map((id) => {
			return { job_type_id: id };
		}),
		list_major: value.majorList.map((id) => {
			return { majors_id: id };
		}),
	};
};

export const formatDate = (dateString: Date) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("vi-VI");
};

export const checkIsTDTEmail = (email: string) => {
	let regex = new RegExp("[a-z0-9]+@student.tdtu.edu.vn");
	if (email.match(regex)) return true;
	return false;
};
