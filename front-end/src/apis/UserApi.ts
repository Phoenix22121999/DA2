import { BaseApi } from "./base.api";
import { UserAccount } from "src/types/Type";
import { ChangePasswordParameters } from "src/types/AuthType";
import { UserAccountWithUserType } from "src/types/CombineType";
export interface Review {
	user_id: number;
	is_active: boolean;
}
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

	async review(data: Review, token: string) {
		return this.authPost<Review, UserAccountWithUserType>(
			"review",
			token,
			data
		);
	}

	async changePassword(data: ChangePasswordParameters, token: string) {
		return this.authPost("change-password", token, data);
	}
}
