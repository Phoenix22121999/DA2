<<<<<<< HEAD
import { ReponseWithTotal } from "src/types/ApiType";
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
import { BaseApi } from "./base.api";
import {
	DetailUserAccount,
	UserAccountWithUserType,
} from "src/types/CombineType";
<<<<<<< HEAD
import { GetListAccountTypeParameters } from "src/types/AccountType";
import { searchParameterBuilder } from "src/utils/function";
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85

// user is admin
export class AccountApi extends BaseApi {
	constructor() {
		super("account/");
	}

<<<<<<< HEAD
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

=======
	async getAccountList(token: string) {
		return this.authGet<{}, UserAccountWithUserType[]>("", token, {});
	}
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
	async getAccountDetail(id: number, token: string) {
		return this.authGet<{}, DetailUserAccount>(
			`get-detail-with-id?user_id=${id}`,
			token,
			{}
		);
	}
<<<<<<< HEAD
	async getAccountDetailByToken(token: string) {
		return this.authGet<{}, DetailUserAccount>(`get-detail`, token, {});
	}
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
}
