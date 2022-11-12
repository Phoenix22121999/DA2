export type ActionPayload<T, K extends Function = Function> = {
	payload: T;
	callback?: K;
};
