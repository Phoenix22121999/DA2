import { configureStore } from "@reduxjs/toolkit";
import { cvReducer } from "./slice/CVSlide";
import { editPostReducer } from "./slice/EditPostSlice";
import { newPostReducer } from "./slice/NewPostSlice";
import { postReducer } from "./slice/PostSlide";
import { searchPostReducer } from "./slice/SearchPostSlide";
import { signUpReducer } from "./slice/SignUpSlice";
import { userReducer } from "./slice/UserSilce";

export const store = configureStore({
	reducer: {
		newPost: newPostReducer,
		signUp: signUpReducer,
		user: userReducer,
		cv: cvReducer,
		post: postReducer,
		searchPost: searchPostReducer,
		editPost: editPostReducer,
	},
});

export type ReduxDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
