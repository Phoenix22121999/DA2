import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	ChangePasswordParameters,
	SignInGGNewParameters,
	SignInGGParameters,
	SignInParameters,
} from "src/types/AuthType";
import { UserAccount } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectSignUpData } from "./SignUpSlice";
import { Review } from "src/apis/UserApi";

export interface UserState {
	data: Partial<UserAccount>;
	AccessToken?: string;
	status: "idle" | "loading" | "failed" | "wait";
}

const initialState: UserState = {
	data: {},
	AccessToken: undefined,
	status: "idle",
};

export const signUp = createAsyncThunk(
	"user/sign-up",
	async (action: ActionPayload<null> = {}, { getState }) => {
		const data = selectSignUpData(getState() as RootState);
		const response = await api.authApi.signUp(data);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
			throw new Error(response.message);
		} else {
			if (response.data) {
				response.data.user_type_id = Number(
					response.data?.user_type_id || 0
				);
			}
			action.callback && action.callback(true, response);
		}
		// The value we return becomes the `fulfilled` action payload
		return response;
	}
);

export const signIn = createAsyncThunk(
	"user/sign-in",
	async (action: ActionPayload<SignInParameters>) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.authApi.signIn(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			response.data!.user_type_id = Number(
				response.data?.user_type_id || 0
			);
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const signInGG = createAsyncThunk(
	"user/sign-in-gg",
	async (action: ActionPayload<SignInGGParameters>) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.authApi.signInWithGoogle(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			response.data!.user_type_id = Number(
				response.data?.user_type_id || 0
			);
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const signInGGNew = createAsyncThunk(
	"user/sign-in-gg-new",
	async (action: ActionPayload<SignInGGNewParameters>) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.authApi.signInWithGoogleNew(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			response.data!.user_type_id = Number(
				response.data?.user_type_id || 0
			);
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const signInWithToken = createAsyncThunk(
	"user/sign-in-with-token",
	async (action: ActionPayload<string>, { getState }) => {
		const response = await api.authApi.signInWithToken(
			action.payload || ""
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			response.data!.user_type_id = Number(
				response.data?.user_type_id || 0
			);
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const changePasswordAction = createAsyncThunk(
	"user/change-password",
	async (action: ActionPayload<ChangePasswordParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState);
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.userApi.changePassword(
			action.payload,
			token || ""
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateAccount = createAsyncThunk(
	"user/update-account",
	async (action: ActionPayload<Partial<UserAccount>>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState);

		const response = await api.userApi.update(action.payload, token || "");
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const reviewAccount = createAsyncThunk(
	"user/review-account",
	async (action: ActionPayload<Review>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState);

		const response = await api.userApi.review(action.payload, token || "");
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
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
		addAccessToken: (state, action: PayloadAction<string>) => {
			state.AccessToken = action.payload;
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
				if (action.payload.data) {
					state.data = { ...state.data, ...action.payload.data };
					state.AccessToken = action.payload.AccessToken;
				}
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
			})
			.addCase(signInGG.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signInGG.fulfilled, (state, action) => {
				state.data = { ...state.data, ...action.payload.data };
				state.AccessToken = action.payload.AccessToken;
			})
			.addCase(signInGG.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(signInGGNew.pending, (state) => {
				state.status = "loading";
			})
			.addCase(signInGGNew.fulfilled, (state, action) => {
				state.data = { ...state.data, ...action.payload.data };
				state.AccessToken = action.payload.AccessToken;
			})
			.addCase(signInGGNew.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(signInWithToken.fulfilled, (state, action) => {
				state.data = { ...state.data, ...action.payload.data };
				state.AccessToken = action.payload.AccessToken;
			})
			.addCase(updateAccount.fulfilled, (state, action) => {
				// state.data = { ...state.data, ...action.payload.data };
			});
	},
});

export const { updateUser, resetUser, addAccessToken } = userSlice.actions;
export const selectUserData = (state: RootState) => state.user.data;
export const selectUserToken = (state: RootState) => state.user.AccessToken;
export const selectUserType = (state: RootState) =>
	state.user.data.user_type_id;

export const userReducer = userSlice.reducer;
