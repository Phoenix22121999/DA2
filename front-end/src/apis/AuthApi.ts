import { BaseApi } from "./base.api";
import {
	AuthUser,
	SignInGGNewParameters,
	SignInGGParameters,
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

	async signInWithGoogle(data: SignInGGParameters) {
		return this.basePost<{}, AuthUser>("sign-in-google", data);
	}

	async signInWithGoogleNew(data: SignInGGNewParameters) {
		return this.basePost<{}, AuthUser>("sign-in-google-new", data);
	}

	async signUp(data: SignUpParameters) {
		return this.basePost<SignUpParameters, AuthUser>("sign-up", data);
	}
}
