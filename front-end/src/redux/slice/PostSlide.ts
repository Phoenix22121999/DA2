import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { DeletePostParameters, UpdatePostParameters } from "src/types/PostType";
import { RecruitmentPost } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import { selectNewPostData } from "./NewPostSlice";
export interface PostType {
	postName: string;
	fileName: string;
}

export interface PostState {
	data: RecruitmentPost[];
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: PostState = {
	data: [],
	currentStep: 0,
	status: "idle",
};

export const createPost = createAsyncThunk(
	"post/create",
	async (action: ActionPayload<null>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const value = selectNewPostData(getState() as RootState);
		const response = await api.postApi.createPost(
			{
				title: value.title,
				content: value.content,
				from_value: value.from_value,
				to_value: value.to_value,
				is_active: true,
				is_delete: false,
			},
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updatePost = createAsyncThunk(
	"post/update",
	async (action: ActionPayload<UpdatePostParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.postApi.updatePost(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deletePost = createAsyncThunk(
	"post/delete",
	async (action: ActionPayload<DeletePostParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.postApi.deletePost(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

// export const getListPost = createAsyncThunk(
// 	"post/get-list",
// 	async (action: ActionPayload, { getState }) => {
// 		const response = await api.postApi.getListPost();
// 		if (response.code !== 200) {
// 			action.callback && action.callback(false, null);
// 		} else {
// 			action.callback && action.callback(true, null);
// 		}
// 		return response;
// 		// The value we return becomes the `fulfilled` action payload
// 	}
// );

export const getListPostByUser = createAsyncThunk(
	"post/get-list-by-user",
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		console.log(token);

		const response = await api.postApi.getListPostByUser(token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const PostSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(createPost.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = [...state.data, action.payload.data];
				}
			})
			.addCase(updatePost.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.map((Post) => {
						if (Post.id === payload.data?.id) return payload.data;
						else return Post;
					});
				}
			})
			.addCase(deletePost.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((Post) => {
						if (Post.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			// .addCase(getListPost.fulfilled, (state, action) => {
			// 	state.data = action.payload.data!;
			// })
			.addCase(getListPostByUser.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			});
	},
});

// export const {} = PostSlice.actions;
export const selectPostList = (state: RootState) => state.post.data;

export const postReducer = PostSlice.reducer;
