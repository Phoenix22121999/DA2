import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionalSignUpParameters, SignUpParameters } from "src/types/AuthType";
import { RootState } from "../store";
import { signUp } from "./User";

export interface SignUpState {
	data: SignUpParameters;
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: SignUpState = {
	data: {
		password: "",
		username: "",
		google_id: null,
		user_type_id: 0,
		first_name: null,
		last_name: null,
		full_name: null,
		email: null,
		number_phone: null,
		age: null,
		gender: null,
		address: null,
		city_id: null,
		district_id: null,
		ward_id: null,
		avartar: null,
		logo: null,
	},
	currentStep: 0,
	status: "idle",
};

export const signUpSlice = createSlice({
	name: "sign-up",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		updateSignUp: (
			state,
			action: PayloadAction<OptionalSignUpParameters>
		) => {
			state.data = { ...state.data, ...action.payload };
		},
		resetSignUp: (state) => {
			state = initialState;
		},
		nextSignUpStep: (state) => {
			state.currentStep++;
		},
		prevSignUpStep: (state) => {
			state.currentStep--;
		},
		setCurrentSignUpStep: (state, action: PayloadAction<number>) => {
			state.currentStep = action.payload;
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(signUp.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.status = "idle";
				state = initialState;
			})
			.addCase(signUp.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const {
	updateSignUp,
	resetSignUp,
	nextSignUpStep,
	prevSignUpStep,
	setCurrentSignUpStep,
} = signUpSlice.actions;
export const selectSignUpData = (state: RootState) => state.signUp.data;
export const selectSignUpStatus = (state: RootState) => state.signUp.status;
export const selectSignUpCurentStep = (state: RootState) =>
	state.signUp.currentStep;

export const signUpReducer = signUpSlice.reducer;
