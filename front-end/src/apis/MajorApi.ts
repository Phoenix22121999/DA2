import {
	CreateMajorParameters,
	DeleteMajorParameters,
	UpdateMajorParameters,
} from "src/types/MajorType";
import { Majors } from "src/types/Type";
import { BaseApi } from "./base.api";

export class MajorApi extends BaseApi {
	constructor() {
		super("majors/");
	}

	async createMajor(data: CreateMajorParameters, token: string) {
		return this.authPost<CreateMajorParameters, Majors>("", token, data);
	}
	async getListMajor(token: string) {
		return this.authGet<{}, Majors[]>("", token, {});
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
