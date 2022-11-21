import { BaseApi } from "./base.api";

import {
	CreateCVParameters,
	DeleteCVParameters,
	DownloadCVParameters,
	UpdateCVParameters,
} from "src/types/CVType";
import { CV } from "src/types/Type";
import { AxiosResponse } from "axios";

// user is admin
export class CVApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async createCV(data: CreateCVParameters, token: string) {
		return this.authPost<CreateCVParameters, CV>("", token, data);
	}
	async getList(token: string) {
		return this.authGet<{}, CV[]>("", token, {});
	}
	async updateCV(data: UpdateCVParameters, token: string) {
		return this.authPut<UpdateCVParameters, CV>("", token, data);
	}
	async deleteCV(data: DeleteCVParameters, token: string) {
		return this.authPost<DeleteCVParameters, CV>("delete", token, data);
	}

	async downloadCV(data: DownloadCVParameters, token: string) {
		return this.authCustomResponsePost<DownloadCVParameters, any>(
			"download",
			token,
			data
		);
	}
}
