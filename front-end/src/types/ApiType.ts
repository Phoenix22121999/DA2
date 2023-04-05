export type BaseErrorType = {
	code: number;
	message: string;
};
export type BaseReponseType<T> = {
	code: number;
	message: string;
	data?: T;
	status_resposse: true;
	AccessToken?: string;
};
export type ReponseWithTotal<T> = {
	result: T;
	total: number;
};
