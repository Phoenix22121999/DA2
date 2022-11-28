import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecruitmentPost } from "src/types/Type";
import { RootState } from "../store";
import { getPostDetail, updatePost } from "./PostSlide";

export interface NewPostState {
	data: RecruitmentPost | null;
	status: "idle" | "loading" | "failed";
}

const initialState: NewPostState = {
	data: null,
	status: "idle",
};

export const newPostSlice = createSlice({
	name: "new-post",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		updateEditPost: (
			state,
			action: PayloadAction<RecruitmentPost | null>
		) => {
			state.data = { ...state.data, ...action.payload! };
		},
		resetEditPost: (state) => {
			state = initialState;
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(updatePost.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getPostDetail.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				state.data = null;
				state.status = "idle";
			})
			.addCase(updatePost.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { updateEditPost, resetEditPost } = newPostSlice.actions;
export const selectEditostData = (state: RootState) => state.editPost.data;
export const selectEditPostStatus = (state: RootState) => state.editPost.status;

export const editPostReducer = newPostSlice.reducer;
