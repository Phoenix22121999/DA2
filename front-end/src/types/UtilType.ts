export type ActionPayload<T = null, K = any> = {
	payload?: T;
	callback?: CallbackFunction<K>;
};

export type CallbackFunction<T = null> = (
	isSuccess: boolean,
	result?: T
) => void;

export type IsDirtyObject<T> = {
	[P in keyof T]: boolean;
};
