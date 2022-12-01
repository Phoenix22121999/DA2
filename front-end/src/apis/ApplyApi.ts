import { BaseApi } from "./base.api";

import {
	CreateCVParameters,
	DeleteCVParameters,
	DownloadCVParameters,
	UpdateCVParameters,
} from "src/types/CVType";
import { CV } from "src/types/Type";
import { ApplyParameter, UnApplyParameter } from "src/types/ApplyType";

// user is admin
export class ApplyApi extends BaseApi {
	constructor() {
		super("cv/");
	}

	async apply(data: ApplyParameter, token: string) {
		return this.authPost("apply-cv", token, data);
	}

	async unApply(data: UnApplyParameter, token: string) {
		return this.authPost("apply-cv", token, data);
	}
}
