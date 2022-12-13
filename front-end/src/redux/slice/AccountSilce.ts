import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	DetailUserAccount,
	UserAccountWithUserType,
} from "src/types/CombineType";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";

export interface AccountState {
	data: UserAccountWithUserType[];
	detailID: number;
	detailData?: DetailUserAccount;
	status: "idle" | "loading" | "failed";
}

const initialState: AccountState = {
	data: [],
	detailID: 0,
	status: "idle",
};

export const getAccountList = createAsyncThunk(
	"account/get-list",
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";

		const response = await api.accountApi.getAccountList(token);
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
				state.data = action.payload.data!;
				state.status = "idle";
			})
			.addCase(getAccountList.pending, (state) => {
				state.status = "loading";
			})
			.addCase(getAccountList.rejected, (state) => {
				state.status = "failed";
			})
			.addCase(getAccountDetail.fulfilled, (state, action) => {
				state.detailData = action.payload.data!;
			});
	},
});
export const { setAccountDetailData } = accountSlice.actions;

export const selectAccountList = (state: RootState) => state.account.data;
export const selectAccountDetailID = (state: RootState) =>
	state.account.detailID;
export const selectAccountListStatus = (state: RootState) =>
	state.account.status;

export const accountReducer = accountSlice.reducer;
