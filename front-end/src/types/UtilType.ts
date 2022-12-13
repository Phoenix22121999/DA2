export type ActionPayload<T = null, K = any> = {
	payload?: T;
	callback?: CallbackFunction<K>;
};

export type CallbackFunction<T = null> = (
	isSuccess: boolean,
	result?: T | null
) => void;

export type IsDirtyObject<T> = {
	[P in keyof T]: boolean;
};

export type PaginationParameters = {
	item_per_page?: number;
	page?: number;
};
