import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { SignInParameters, OptionalAuthUser } from "src/types/AuthType";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectSignUpData } from "./SignUp";

export interface UserState {
	data: OptionalAuthUser;
	AccessToken?: string;
	status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
	data: {},
	AccessToken: undefined,
	status: "idle",
};

export const signUp = createAsyncThunk(
	"user/sign-up",
	async (_, { getState }) => {
		const data = selectSignUpData(getState() as RootState);
		const response = await api.authApi.signUp(data);
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const signIn = createAsyncThunk(
	"user/sign-in",
	async (action: ActionPayload<SignInParameters>) => {
		const response = await api.authApi.signIn(action.payload);

		action.callback && action.callback(response);
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const userSlice = createSlice({
	name: "sign-up",
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
			state.data = action.payload.data || {};
			state.AccessToken = action.payload.AccessToken;
		},
		resetUser: (state) => {
			state.AccessToken = undefined;
			state.data = {};
			state.status = "idle";
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(signUp.fulfilled, (state, action) => {
				state.data = { ...state.data, ...action.payload.data };
				state.AccessToken = action.payload.AccessToken;
			})
			.addCase(signIn.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signIn.fulfilled, (state, action) => {
				state.data = { ...state.data, ...action.payload.data };
				state.AccessToken = action.payload.AccessToken;
			})
			.addCase(signIn.rejected, (state) => {
				state.status = "failed";
			});
	},
});

export const { updateUser, resetUser } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.data;
export const selectUserToken = (state: RootState) => state.user.AccessToken;
export const selectUserType = (state: RootState) => state.user.data.use_type_id;

export const userReducer = userSlice.reducer;
