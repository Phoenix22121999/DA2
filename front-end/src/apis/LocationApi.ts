import { Districts, Provinces, Wards } from "src/types/Type";
import { BaseApi } from "./base.api";

export class LocationApi extends BaseApi {
	constructor() {
		super("address/");
	}
	async getProvinces() {
		return this.baseGet<{}, Provinces[]>("provinces", {});
	}
	async getDistrict(provinceCode: string) {
		return this.baseGet<{}, Districts[]>(
			`district/?province_code=${provinceCode}`,
			{}
		);
	}
	async getWard(districtCode: string) {
		return this.baseGet<{}, Wards[]>(
			`ward/?district_code=${districtCode}`,
			{}
		);
	}
}
