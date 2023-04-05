import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "src/apis/index.api";

import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import { applyCV, unApplyCV } from "./ApplySlide";
import { BaseReponseType } from "src/types/ApiType";
import {
	GetCandidateHistoryListByIdParameters,
	GetCandidateHistoryListParameters,
	GetRecruiterHistoryListByIdParameters,
} from "src/types/ApplyHistoryType";
import { GetRecruiterHistoryListParameters } from "./../../types/ApplyHistoryType";

export interface CVState {
	data: DetailHistoryApplyJob[];
	userTypeId: number;
	status: "idle" | "loading" | "failed";
}

const initialState: CVState = {
	data: [],
	userTypeId: 0,
	status: "idle",
};

export const getCandidateApplyHistory = createAsyncThunk(
	"apply-history/apply-candidate-history",
	async (
		action: ActionPayload<GetCandidateHistoryListParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyHistoryApi.getCandidateApplyHistory(
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

export const getRecruiterApplyHistory = createAsyncThunk(
	"apply-history/apply-recruiter-history",
	async (
		action: ActionPayload<GetRecruiterHistoryListParameters>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyHistoryApi.getRecruiterApplicantHistory(
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

export const getCandidateApplyHistoryById = createAsyncThunk(
	"apply-history/apply-candidate-history-by-id",
	async (
		action: ActionPayload<
			GetCandidateHistoryListByIdParameters,
			BaseReponseType<DetailHistoryApplyJob[]>
		>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyHistoryApi.getCandidateApplyHistoryById(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getRecruiterApplyHistoryById = createAsyncThunk(
	"apply-history/apply-recruiter-history-by-id",
	async (
		action: ActionPayload<
			GetRecruiterHistoryListByIdParameters,
			BaseReponseType<DetailHistoryApplyJob[]>
		>,
		{ getState }
	) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response =
			await api.applyHistoryApi.getRecruiterApplicantHistoryById(
				action.payload,
				token
			);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const applyHistorySlice = createSlice({
	name: "apply-history",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setHistoryUserTypeId: (state, action: PayloadAction<number>) => {
			state.userTypeId = action.payload;
		},
		resetApplyHistory: (state) => {
			state.data = [];
			state.userTypeId = 0;
			state.status = "idle";
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(getCandidateApplyHistory.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = action.payload.data;
				}
			})
			.addCase(
				getRecruiterApplyHistory.fulfilled,
				(state, { payload }) => {
					if (payload.data) {
						state.data = payload.data;
					}
				}
			)
			.addCase(unApplyCV.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((history) => {
						if (history.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(applyCV.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload.data!];
			});
	},
});

export const { setHistoryUserTypeId, resetApplyHistory } =
	applyHistorySlice.actions;
export const selectApplyHistory = (state: RootState) => state.applyHistory.data;
export const selectHistoryUserType = (state: RootState) =>
	state.applyHistory.userTypeId;

export const applyHistoryReducer = applyHistorySlice.reducer;
