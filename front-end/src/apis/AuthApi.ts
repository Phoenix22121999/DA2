import { BaseApi } from "./base.api";
import {
	AuthUser,
	SignInParameters,
	SignUpParameters,
} from "src/types/AuthType";

// user is admin
export class AuthApi extends BaseApi {
	constructor() {
		super("account/");
	}

	async signIn(data: SignInParameters) {
		return this.basePost<SignInParameters, AuthUser>("sign-in", data);
	}

	async signInWithToken(token: string) {
		return this.authPost<{}, AuthUser>("sign-in-with-token", token, {});
	}

	async signUp(data: SignUpParameters) {
		return this.basePost<SignUpParameters, AuthUser>("sign-up", data);
	}
}
