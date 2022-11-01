export type AuthUser = {
	id: number;
	username: string;
	user_id: number;
	use_type_id: number;
};
export type AuthReponse = {
	code: number;
	status_resposse: boolean;
	message: string;
	data: AuthUser;
	AccessToken: String;
};

export type LoginParameters = {
	username: string;
	password: string;
};
