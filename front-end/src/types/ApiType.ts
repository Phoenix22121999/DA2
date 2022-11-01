export type BaseErrorType = {
	code: number;
	message: string;
};
export type BaseReponseType<T> = {
	code: number;
	message: string;
	data: T;
};
