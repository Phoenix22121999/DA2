import { BaseApi } from "./base.api";

import { PaginationParameters } from "src/types/UtilType";
import { DetailHistoryApplyJob } from "src/types/CombineType";

// user is admin
export class ApplyHistoryApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async getCandidateApplyHistory(data: PaginationParameters, token: string) {
		return this.authGet<PaginationParameters, DetailHistoryApplyJob[]>(
			"history-apply",
			token,
			data
		);
	}

	async getRecruiterApplicantHistory(
		data: PaginationParameters,
		token: string
	) {
		return this.authGet<PaginationParameters, DetailHistoryApplyJob[]>(
			"history-applier-post",
			token,
			data
		);
	}
	async getCandidateApplyHistoryById(
		id: number,
		data: PaginationParameters,
		token: string
	) {
		return this.authGet<PaginationParameters, DetailHistoryApplyJob[]>(
			`history-apply-by-id?user_id=${id}`,
			token,
			data
		);
	}

	async getRecruiterApplicantHistoryById(
		id: number,
		data: PaginationParameters,
		token: string
	) {
		return this.authGet<PaginationParameters, DetailHistoryApplyJob[]>(
			`history-applier-post-by-id?user_id=${id}`,
			token,
			data
		);
	}
}
