import { UserAccount } from "./Type";

export type AuthUser = {
	id: number;
	username: string;
	user_id: number;
	user_type_id: number;
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

// export type User = {
// 	id: number;
// 	password: string;
// 	username: string;
// 	// user_type_id Int
// 	google_id?: number;
// 	is_active: boolean;
// 	is_delete: boolean;
// 	create_date: string;
// 	user_type?: UserType;
// 	user_type_id?: number;
// 	first_name?: string;
// 	last_name?: string;
// 	full_name?: string;
// 	email?: string;
// 	number_phone?: string;
// 	age?: number;
// 	gender?: number;
// 	address?: string;
// 	city_id?: number;
// 	district_id?: number;
// 	ward_id?: number;
// 	avartar?: string;
// 	logo?: string;
// 	// profile  :    Apply_Profile  []
// 	// post     :    Recruitment_Post[]
// };

// export type UserType = {
// 	id: number;
// 	user_type_name: String;
// 	is_active: Boolean;
// 	is_delete: Boolean;
// 	create_date: string;
// 	create_user: string;
// 	update_date: string;
// 	update_user: string;
// 	delete_date: string;
// 	delete_user: string;
// 	account: User[];
// };
