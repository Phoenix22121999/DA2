import { SearchParameter } from "src/types/SearchType";

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
export const searchParameterBuilder = (searchParameter: SearchParameter) => {
	const searchParams = new URLSearchParams(searchParameter as any);
	return searchParams.toString();
};
