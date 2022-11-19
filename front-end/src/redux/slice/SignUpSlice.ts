import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OptionalSignUpParameters, SignUpParameters } from "src/types/AuthType";
import { RootState } from "../store";
import { signUp } from "./UserSilce";
import { ActionPayload } from "src/types/UtilType";
import api from "../../apis/index.api";
import { BaseReponseType } from "src/types/ApiType";
import { UserType } from "src/types/Type";

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
		user_type_id: null,
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

export const getUserTypeList = createAsyncThunk(
	"sign-up/user-type",
	async (
		action: ActionPayload<null, BaseReponseType<Partial<UserType>[]>>,
		{ getState }
	) => {
		const response = await api.utilApi.getListUserType();
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		// The value we return becomes the `fulfilled` action payload
		// return response;
	}
);

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
			state.data = {
				password: "",
				username: "",
				google_id: null,
				user_type_id: null,
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
			};
			state.currentStep = 0;
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
				state.data = {
					password: "",
					username: "",
					google_id: null,
					user_type_id: null,
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
				};
				state.status = "idle";
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
