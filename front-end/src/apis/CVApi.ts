import { BaseApi } from "./base.api";

import {
	CreateCVFromProfileParameters,
	CreateCVParameters,
	DeleteCVParameters,
	DownloadCVParameters,
	UpdateCVParameters,
} from "src/types/CVType";
import { CV } from "src/types/Type";

// user is admin
export class CVApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async createCV(data: CreateCVParameters, token: string) {
		return this.authPost<CreateCVParameters, CV>("", token, data);
	}
	async createCVFromProfile(
		data: CreateCVFromProfileParameters,
		token: string
	) {
		return this.authCustomResponseGet<{}, any>(
			`export-pdf?name_cv=${data.name_cv}`,
			token,
			{}
		);
	}
	async getList(token: string) {
		return this.authGet<{}, CV[]>("", token, {});
	}

	async getListById(id: number, token: string) {
		return this.authGet<{}, CV[]>(`by-id?user_id=${id}`, token, {});
	}
	async updateCV(data: UpdateCVParameters, token: string) {
		return this.authPut<UpdateCVParameters, CV>("", token, data);
	}
	async deleteCV(data: DeleteCVParameters, token: string) {
		return this.authPost<DeleteCVParameters, CV>("delete", token, data);
	}

	async downloadCV(data: DownloadCVParameters, token: string) {
		return this.authCustomResponseGet<{}, any>(
			`download/${data.cv_id}`,
			token,
			{}
		);
	}
}
