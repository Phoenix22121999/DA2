import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { RecruitmentPost } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";

export interface SearchPostState {
	data: RecruitmentPost[];
	status: "idle" | "loading" | "failed";
}

const initialState: SearchPostState = {
	data: [],
	status: "idle",
};

export const searchPost = createAsyncThunk(
	"search-post/get-list",
	async (action: ActionPayload, { getState }) => {
		const response = await api.postApi.getListPost();
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const SeachPostSlice = createSlice({
	name: "search-post",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider.addCase(searchPost.fulfilled, (state, action) => {
			state.data = action.payload.data!;
		});
	},
});

// export const {} = PostSlice.actions;
export const selectPostList = (state: RootState) => state.searchPost.data;

export const searchPostReducer = SeachPostSlice.reducer;
