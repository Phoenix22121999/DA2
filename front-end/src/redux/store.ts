import { configureStore } from "@reduxjs/toolkit";
import { cvReducer } from "./slice/CVSlide";
import { newPostReducer } from "./slice/NewPostSlice";
import { signUpReducer } from "./slice/SignUpSlice";
import { userReducer } from "./slice/UserSilce";

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
		signUp: signUpReducer,
		user: userReducer,
		cv: cvReducer,
	},
});

export type ReduxDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
