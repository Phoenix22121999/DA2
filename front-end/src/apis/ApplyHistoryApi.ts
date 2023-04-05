import { BaseApi } from "./base.api";

import { DetailHistoryApplyJob } from "src/types/CombineType";
import {
	GetCandidateHistoryListByIdParameters,
	GetCandidateHistoryListParameters,
	GetRecruiterHistoryListByIdParameters,
	GetRecruiterHistoryListParameters,
} from "src/types/ApplyHistoryType";
import { searchParameterBuilder } from "src/utils/function";

// user is admin
export class ApplyHistoryApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async getCandidateApplyHistory(
		data: GetCandidateHistoryListParameters,
		token: string
	) {
		return this.authGet<
			GetCandidateHistoryListParameters,
			DetailHistoryApplyJob[]
		>("history-apply", token, data);
	}

	async getRecruiterApplicantHistory(
		data: GetRecruiterHistoryListParameters,
		token: string
	) {
		return this.authGet<
			GetRecruiterHistoryListParameters,
			DetailHistoryApplyJob[]
		>("history-applier-post", token, data);
	}
	async getCandidateApplyHistoryById(
		data: GetCandidateHistoryListByIdParameters,
		token: string
	) {
		const params = searchParameterBuilder(data);
		return this.authGet<
			GetCandidateHistoryListParameters,
			DetailHistoryApplyJob[]
		>(`history-apply-by-id?${params}`, token, data);
	}

	async getRecruiterApplicantHistoryById(
		data: GetRecruiterHistoryListByIdParameters,
		token: string
	) {
		const params = searchParameterBuilder(data);

		return this.authGet<
			GetRecruiterHistoryListParameters,
			DetailHistoryApplyJob[]
		>(`history-applier-post-by-id?${params}`, token, data);
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
