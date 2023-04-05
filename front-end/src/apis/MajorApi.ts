import {
	CreateMajorParameters,
	DeleteMajorParameters,
	GetMajorListParameters,
	UpdateMajorParameters,
} from "src/types/MajorType";
import { Majors } from "src/types/Type";
import { BaseApi } from "./base.api";
import { searchParameterBuilder } from "src/utils/function";

export class MajorApi extends BaseApi {
	constructor() {
		super("majors/");
	}

	async createMajor(data: CreateMajorParameters, token: string) {
		return this.authPost<CreateMajorParameters, Majors>("", token, data);
	}
	async getListMajor(data: GetMajorListParameters, token: string) {
		const params = searchParameterBuilder(data);

		return this.authGet<{}, Majors[]>(`?${params}`, token, {});
	}
	async updateMajor(data: UpdateMajorParameters, token: string) {
		return this.authPut<UpdateMajorParameters, Majors>("", token, data);
	}
	async deleteMajor(data: DeleteMajorParameters, token: string) {
		return this.authPost<DeleteMajorParameters, Majors>(
			"delete",
			token,
			data
		);
	}
}
