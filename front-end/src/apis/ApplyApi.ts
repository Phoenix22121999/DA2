import { BaseApi } from "./base.api";

import { ApplyParameter, UnApplyParameter } from "src/types/ApplyType";
import { DetailHistoryApplyJob } from "./../types/CombineType";

// user is admin
export class ApplyApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async apply(data: ApplyParameter, token: string) {
		return this.authPost<ApplyParameter, DetailHistoryApplyJob>(
			"apply-cv",
			token,
			data
		);
	}

	async unApply(data: UnApplyParameter, token: string) {
		return this.authPost<UnApplyParameter, DetailHistoryApplyJob>(
			"un-apply-cv",
			token,
			data
		);
	}
}
