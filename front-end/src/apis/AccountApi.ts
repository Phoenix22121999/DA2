import { ReponseWithTotal } from "src/types/ApiType";
import { BaseApi } from "./base.api";
import {
	DetailUserAccount,
	UserAccountWithUserType,
} from "src/types/CombineType";
import { GetListAccountTypeParameters } from "src/types/AccountType";
import { searchParameterBuilder } from "src/utils/function";

// user is admin
export class AccountApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async getAccountList(data: GetListAccountTypeParameters, token: string) {
		const params = searchParameterBuilder(data);

		return this.authGet<
			GetListAccountTypeParameters,
			ReponseWithTotal<UserAccountWithUserType[]>
		>(`?${params}`, token, data);
	}

	async getAccountUnActiveList(
		data: GetListAccountTypeParameters,
		token: string
	) {
		const params = searchParameterBuilder({ ...data, is_active: 0 });

		return this.authGet<
			GetListAccountTypeParameters,
			ReponseWithTotal<UserAccountWithUserType[]>
		>(`?${params}`, token, data);
	}

	async getAccountDetail(id: number, token: string) {
		return this.authGet<{}, DetailUserAccount>(
			`get-detail-with-id?user_id=${id}`,
			token,
			{}
		);
	}
	async getAccountDetailByToken(token: string) {
		return this.authGet<{}, DetailUserAccount>(`get-detail`, token, {});
	}
}
