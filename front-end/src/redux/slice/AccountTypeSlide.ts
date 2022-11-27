import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	CreateAccountTypeParameters,
	DeleteAccountTypeParameters,
	UpdateAccountTypeParameters,
} from "src/types/AccountTypeType";
import { UserType } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";

export interface AccountTypeState {
	data: UserType[];
	status: "idle" | "loading" | "failed";
}

const initialState: AccountTypeState = {
	data: [],
	status: "idle",
};

export const getListAccountType = createAsyncThunk(
	"account-type/get-list-account-type",
	async (action: ActionPayload<null>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountTypeApi.getListAccountType(token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createAccountType = createAsyncThunk(
	"account-type/create",
	async (
		action: ActionPayload<CreateAccountTypeParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountTypeApi.createAccountType(
			action.payload,
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

export const updateAccountType = createAsyncThunk(
	"account-type/update",
	async (
		action: ActionPayload<UpdateAccountTypeParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountTypeApi.updateAccountType(
			action.payload,
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

export const deleteAccountType = createAsyncThunk(
	"account-type/delete",
	async (
		action: ActionPayload<DeleteAccountTypeParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountTypeApi.deleteAccountType(
			action.payload,
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

export const AccountTypeSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(createAccountType.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = [...state.data, action.payload.data];
				}
			})
			.addCase(updateAccountType.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.map((accountType) => {
						if (accountType.id === payload.data?.id)
							return payload.data;
						else return accountType;
					});
				}
			})
			.addCase(deleteAccountType.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((accountType) => {
						if (accountType.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(getListAccountType.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			});
	},
});

// export const {} = AccountTypeSlice.actions;
export const selectAccountTypeList = (state: RootState) =>
	state.accountType.data;

export const accountTypeReducer = AccountTypeSlice.reducer;
