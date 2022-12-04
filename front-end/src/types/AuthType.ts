import { UserAccount } from "./Type";

export type AuthUser = {
	id: number;
	username: string;
	user_id: number;
	user_type_id: number;
	google_id?: string;
};
export type OptionalAuthUser = Partial<AuthUser>;

export type AuthReponse = {
	code: number;
	status_resposse: boolean;
	message: string;
	data: AuthUser;
	AccessToken: String;
};

export interface SignUpParameters
	extends Omit<
		UserAccount,
		"id" | "create_date" | "is_delete" | "is_active"
	> {}
export type OptionalSignUpParameters = Partial<SignUpParameters>;

export type SignInParameters = {
	user_name: string;
	password: string;
};

export type SignInGGParameters = {
	token: string;
	is_tdtu: boolean;
	googleId: string;
};

export type ChangePasswordParameters = {
	current_password: string;
	new_password: string;
};
