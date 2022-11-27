import {
	CreateAccountTypeParameters,
	DeleteAccountTypeParameters,
	UpdateAccountTypeParameters,
} from "src/types/AccountTypeType";
import { UserType } from "src/types/Type";
import { BaseApi } from "./base.api";

export class AccountTypeApi extends BaseApi {
	constructor() {
		super("account-type/");
	}

	async createAccountType(data: CreateAccountTypeParameters, token: string) {
		return this.authPost<CreateAccountTypeParameters, UserType>(
			"",
			token,
			data
		);
	}
	async getListAccountType(token: string) {
		return this.authGet<{}, UserType[]>("", token, {});
	}
	async updateAccountType(data: UpdateAccountTypeParameters, token: string) {
		return this.authPut<UpdateAccountTypeParameters, UserType>(
			"update",
			token,
			data
		);
	}
	async deleteAccountType(data: DeleteAccountTypeParameters, token: string) {
		return this.authPost<DeleteAccountTypeParameters, UserType>(
			"delete",
			token,
			data
		);
	}
}
