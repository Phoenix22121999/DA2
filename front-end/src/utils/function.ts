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
