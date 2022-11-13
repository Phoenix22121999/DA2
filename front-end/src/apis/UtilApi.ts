import { UserType } from "src/types/Type";
import { BaseApi } from "./base.api";

// user is admin
export class UtilApi extends BaseApi {
	constructor() {
		super("account-type");
	}

	async getListUserType() {
		return this.baseGet<{}, Partial<UserType>[]>("/", {});
	}
}
