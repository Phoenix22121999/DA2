import { configureStore } from "@reduxjs/toolkit";
import { newPostReducer } from "./slice/NewPostSlice";
import { signUpReducer } from "./slice/SignUpSlice";
import { userReducer } from "./slice/UserSilce";

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
		signUp: signUpReducer,
		user: userReducer,
	},
});

export type ReduxDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
