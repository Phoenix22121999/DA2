import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DetailRecruitmentPost } from "src/types/CombineType";
import { RootState } from "../store";
import { getPostDetail, updatePost } from "./PostSlide";

export interface NewPostState {
	id: number;
	data: DetailRecruitmentPost | null;
	status: "idle" | "loading" | "failed";
}

const initialState: NewPostState = {
	id: 0,
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
			action: PayloadAction<DetailRecruitmentPost | null>
		) => {
			state.data = { ...state.data, ...action.payload! };
		},
		setEditPostID: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
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
			.addCase(getPostDetail.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getPostDetail.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(getPostDetail.fulfilled, (state, action) => {
				state.status = "idle";
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

export const { updateEditPost, resetEditPost, setEditPostID } =
	newPostSlice.actions;
export const selectEditPostData = (state: RootState) => state.editPost.data;
export const selectEditPostID = (state: RootState) => state.editPost.id;
export const selectEditPostStatus = (state: RootState) => state.editPost.status;

export const editPostReducer = newPostSlice.reducer;
