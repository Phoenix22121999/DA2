import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	DetailUserAccount,
	UserAccountWithUserType,
} from "src/types/CombineType";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { reviewAccount, selectUserToken } from "./UserSilce";
import { GetListAccountTypeParameters } from "src/types/AccountType";

export interface AccountState {
	data: UserAccountWithUserType[];
	unactives: UserAccountWithUserType[];
	detailID: number;
	total: number;
	totalUnactive: number;
	detailData?: DetailUserAccount;
	status: "idle" | "loading" | "failed";
	totalCandidate: number;
	totalRecruiter: number;
}

const initialState: AccountState = {
	data: [],
	unactives: [],
	detailID: 0,
	total: 0,
	totalCandidate: 0,
	totalRecruiter: 0,
	totalUnactive: 0,
	status: "idle",
};

export const getAccountList = createAsyncThunk(
	"account/get-list",
	async (
		action: ActionPayload<GetListAccountTypeParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";

		const response = await api.accountApi.getAccountList(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
			throw new Error(response.message);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getUnActiveAccountList = createAsyncThunk(
	"account/get--unacitve-list",
	async (
		action: ActionPayload<GetListAccountTypeParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";

		const response = await api.accountApi.getAccountUnActiveList(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
			throw new Error(response.message);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getAccountDetail = createAsyncThunk(
	"account/get-detail",
	async (action: ActionPayload<number>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountApi.getAccountDetail(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
			throw new Error(response.message);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getAccountDetailByToken = createAsyncThunk(
	"account/get-detail-by-token",
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.accountApi.getAccountDetailByToken(token);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
			throw new Error(response.message);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const accountSlice = createSlice({
	name: "account",
	initialState,
	reducers: {
		setAccountDetailData: (state, action: PayloadAction<number>) => {
			state.detailID = action.payload;
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(getAccountList.fulfilled, (state, action) => {
				state.data = action.payload.data!.result;
				state.total = action.payload.data!.total;
				state.status = "idle";
			})
			.addCase(getAccountList.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getAccountList.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(getUnActiveAccountList.fulfilled, (state, action) => {
				state.unactives = action.payload.data!.result;
				state.totalUnactive = action.payload.data!.total;
			})
			.addCase(reviewAccount.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.unactives = state.unactives.filter((unactive) => {
						if (unactive.id === payload.data?.id) return false;
						else return true;
					});
					state.data = [...state.data, payload.data];
					state.totalUnactive = state.totalUnactive - 1;
					state.total = state.total + 1;
				}
			})
			.addCase(getAccountDetail.fulfilled, (state, action) => {
				state.detailData = action.payload.data!;
			});
	},
});
export const { setAccountDetailData } = accountSlice.actions;

export const selectAccountList = (state: RootState) => state.account.data;
export const selectAccountTotal = (state: RootState) => state.account.total;
export const selectUnacitveAccountList = (state: RootState) =>
	state.account.unactives;
export const selectUnacitveAccountTotal = (state: RootState) =>
	state.account.totalUnactive;
export const selectAccountDetailID = (state: RootState) =>
	state.account.detailID;
export const selectAccountListStatus = (state: RootState) =>
	state.account.status;

export const accountReducer = accountSlice.reducer;
