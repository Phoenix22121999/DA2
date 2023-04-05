import {
	ForgotPasswordParameters,
	ResetPasswordParameters,
} from "src/types/PasswordType";
import { BaseApi } from "./base.api";

// user is admin
export class PasswordApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async sendForgotPasswordMail(data: ForgotPasswordParameters) {
		return this.basePost<ForgotPasswordParameters, null>(
			"forgot-password",
			data
		);
	}
	async resetPassword(data: ResetPasswordParameters) {
		const { token, new_password } = data;
		return this.authPost<{}, null>(`reset-password`, token, {
			new_password,
		});
	}
}
