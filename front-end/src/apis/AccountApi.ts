import { BaseApi } from "./base.api";
import {
	DetailUserAccount,
	UserAccountWithUserType,
} from "src/types/CombineType";

// user is admin
export class AccountApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async getAccountList(token: string) {
		return this.authGet<{}, UserAccountWithUserType[]>("", token, {});
	}
	async getAccountDetail(id: number, token: string) {
		return this.authGet<{}, DetailUserAccount>(
			`get-detail-with-id?user_id=${id}`,
			token,
			{}
		);
	}
}
