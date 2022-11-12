import { configureStore } from "@reduxjs/toolkit";
import { newPostReducer } from "./slice/NewPost";

export const store = configureStore({
	reducer: { newPost: newPostReducer },
});

export type ReduxDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
