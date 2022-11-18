import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface NewPostDataType {
	content?: string;
	to_value?: string;
	form_value?: string;
	job_type_id?: number;
	majors_id?: number;
}

export interface NewPostState {
	data: NewPostDataType;
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: NewPostState = {
	data: {
		content: "",
		to_value: "",
		form_value: "",
		job_type_id: 0,
		majors_id: 0,
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
			state.data = { ...state.data, ...action };
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
});

export const { updateNewPost, resetNewPost, nextStep, prevStep, setCurrent } =
	newPostSlice.actions;
export const selectNewPostData = (state: RootState) => state.newPost.data;
export const selectNewPostCurentStep = (state: RootState) =>
	state.newPost.currentStep;

export const newPostReducer = newPostSlice.reducer;
