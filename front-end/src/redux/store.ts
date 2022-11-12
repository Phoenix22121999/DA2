import { configureStore } from "@reduxjs/toolkit";
import { newPostReducer } from "./slice/NewPost";
import { signUpReducer } from "./slice/SignUp";
import { userReducer } from "./slice/User";

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
		signUp: signUpReducer,
		user: userReducer,
	},
});

export type ReduxDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
