export type ForgotPasswordParameters = {
	email: string;
	user_name: string;
};
export type ResetPasswordParameters = {
	new_password: string;
	token: string;
};
