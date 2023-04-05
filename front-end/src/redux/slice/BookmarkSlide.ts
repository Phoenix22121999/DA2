import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";

import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import {
	BookmarkParameters,
	GetListBookmarkParameters,
	GetListByIdBookmarkParameters,
	UnBookmarkParameters,
} from "src/types/BookmarkType";
import { DetailRecruitmentPostUserLike } from "src/types/CombineType";

export interface BookmarkState {
	data: DetailRecruitmentPostUserLike[];
	status: "idle" | "loading" | "failed";
}

const initialState: BookmarkState = {
	data: [],
	status: "idle",
};

export const getListBookmark = createAsyncThunk(
	"booksmark/get-list",
	async (action: ActionPayload<GetListBookmarkParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.bookmarkApi.getListBookmark(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getListBookmarkById = createAsyncThunk(
	"booksmark/get-list",
	async (
		action: ActionPayload<GetListByIdBookmarkParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.bookmarkApi.getListBookmarkById(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const bookmark = createAsyncThunk(
	"booksmark/booksmark",
	async (action: ActionPayload<BookmarkParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.bookmarkApi.bookmark(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const unBookmark = createAsyncThunk(
	"booksmark/un-booksmark",
	async (action: ActionPayload<UnBookmarkParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.bookmarkApi.unbookmark(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const bookmarkSlide = createSlice({
	name: "apply-history",
	initialState,
	reducers: {
		resetBookmark: (state) => {
			state.data = [];
			state.status = "idle";
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(getListBookmark.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = action.payload.data;
				}
			})
			.addCase(bookmark.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = [...state.data, payload.data];
				}
			})
			.addCase(unBookmark.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((bookmark) => {
						if (bookmark.id === payload.data?.id) return false;
						else return true;
					});
				}
			});
	},
});

export const { resetBookmark } = bookmarkSlide.actions;
export const selectBookmarkList = (state: RootState) => state.bookmark.data;

export const bookmarkReducer = bookmarkSlide.reducer;
