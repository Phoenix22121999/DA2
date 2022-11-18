import { BaseApi } from "./base.api";
import { UserAccount } from "src/types/Type";
import { ChangePasswordParameters } from "src/types/AuthType";

export class UserApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async update(data: Partial<UserAccount>, token: string) {
		return this.authPost<Partial<UserAccount>, Partial<UserAccount>>(
			"account-update",
			token,
			data
		);
	}

	async changePassword(data: ChangePasswordParameters, token: string) {
		return this.authPost("change-password", token, data);
	}
}
