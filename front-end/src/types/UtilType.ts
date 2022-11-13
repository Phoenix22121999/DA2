export type ActionPayload<T, K = any> = {
	payload?: T;
	callback?: CallbackFunction<K>;
};

export type CallbackFunction<T> = (isSuccess: boolean, result: T) => void;
