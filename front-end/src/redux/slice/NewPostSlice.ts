import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreatePostParameters } from "src/types/PostType";
import { RootState } from "../store";
import { createPost } from "./PostSlide";

export interface NewPostDataType extends Partial<CreatePostParameters> {}

export interface NewPostState {
	editID: number | null;
	data: Required<NewPostDataType>;
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: NewPostState = {
	data: {
		title: "",
		content: "",
		to_value: 0,
		from_value: 0,
		list_job_type: [],
		list_major: [],
		gender: 1,
		is_active: true,
		is_delete: false,
	},
	editID: null,
	currentStep: 0,
	status: "idle",
};

export const newPostSlice = createSlice({
	name: "new-post",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		updateNewPost: (state, action: PayloadAction<NewPostDataType>) => {
			state.data = { ...state.data, ...action.payload };
		},
		resetNewPost: (state) => {
			state = initialState;
		},
		nextStep: (state) => {
			state.currentStep++;
		},
		prevStep: (state) => {
			state.currentStep--;
		},
		setCurrent: (state, action: PayloadAction<number>) => {
			state.currentStep = action.payload;
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(createPost.pending, (state) => {
				state.status = "loading";
			})
			.addCase(createPost.fulfilled, (state, action) => {
				state.data = {
					title: "",
					content: "",
					to_value: 0,
					from_value: 0,
					list_job_type: [],
					list_major: [],
					gender: 1,
					is_active: true,
					is_delete: false,
				};
				state.status = "idle";
			})
			.addCase(createPost.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { updateNewPost, resetNewPost, nextStep, prevStep, setCurrent } =
	newPostSlice.actions;
export const selectNewPostData = (state: RootState) => state.newPost.data;
export const selectNewPostStatus = (state: RootState) => state.newPost.status;
export const selectNewPostCurentStep = (state: RootState) =>
	state.newPost.currentStep;

export const newPostReducer = newPostSlice.reducer;
