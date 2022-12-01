import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { DetailRecruitmentPostWithoutContent } from "src/types/CombineType";
import { SearchParameter } from "src/types/SearchType";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";

export interface SearchPostState {
	data: DetailRecruitmentPostWithoutContent[];
	searchParameter: SearchParameter;
	total: number;
	status: "idle" | "loading" | "failed";
}

const initialState: SearchPostState = {
	data: [],
	searchParameter: {},
	total: 0,
	status: "idle",
};

export const searchPost = createAsyncThunk(
	"search-post/get-list",
	async (action: ActionPayload, { getState }) => {
		const searchParameter =
			selectSearchParameter(getState() as RootState) || "";

		const response = await api.postApi.getListPost(searchParameter);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updatePrameterAndSearchPost = createAsyncThunk(
	"search-post/update-and-get-list",
	async (action: ActionPayload<SearchParameter>, { getState, dispatch }) => {
		if (action.payload) {
			dispatch(updateSearchParameter(action.payload));
			return await dispatch(searchPost({}));
		}
	}
);

export const SeachPostSlice = createSlice({
	name: "search-post",
	initialState,
	reducers: {
		updateSearchParameter: (
			state,
			action: PayloadAction<SearchParameter>
		) => {
			state.searchParameter = {
				...state.searchParameter,
				...action.payload,
			};
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider.addCase(searchPost.fulfilled, (state, action) => {
			state.data = action.payload.data!.result;
			state.total = action.payload.data!.total;
		});
	},
});

export const { updateSearchParameter } = SeachPostSlice.actions;
export const selectSearchPostList = (state: RootState) => state.searchPost.data;
export const selectSearchTotal = (state: RootState) => state.searchPost.total;
export const selectSearchParameter = (state: RootState) =>
	state.searchPost.searchParameter;

export const searchPostReducer = SeachPostSlice.reducer;
