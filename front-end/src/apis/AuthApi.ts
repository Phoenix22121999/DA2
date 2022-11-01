import { BaseApi } from "./base.api";
import { AuthUser, LoginParameters } from "src/types/AuthType";
import { BaseReponseType } from "src/types/ApiType";
import { BaseErrorType } from "src/types/ApiType";

// user is admin
export class AuthApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async login(data: LoginParameters) {
		return this.basePost<LoginParameters, AuthUser>("sign-in", data);
	}
}
