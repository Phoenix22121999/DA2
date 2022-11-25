import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { createPost } from "./PostSlide";

export interface NewPostDataType {
	content?: string;
	to_value?: number;
	form_value?: number;
	job_type_id?: number;
	majors_id?: number;
	title?: string;
}

export interface NewPostState {
	data: Required<NewPostDataType>;
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: NewPostState = {
	data: {
		title: "",
		content: "",
		to_value: 0,
		form_value: 0,
		job_type_id: 1,
		majors_id: 1,
	},
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
					form_value: 0,
					job_type_id: 1,
					majors_id: 1,
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
