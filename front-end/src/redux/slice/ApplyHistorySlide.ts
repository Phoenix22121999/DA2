import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";

import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import { applyCV, unApplyCV } from "./ApplySlide";

export interface CVState {
	data: DetailHistoryApplyJob[];
	status: "idle" | "loading" | "failed";
}

const initialState: CVState = {
	data: [],
	status: "idle",
};

export const getCandidateApplyHistory = createAsyncThunk(
	"apply-history/apply-candidate-history",
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyHistoryApi.getCandidateApplyHistory(
			{},
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
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyHistoryApi.getRecruiterApplicantHistory(
			{},
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

export const applyHistorySlice = createSlice({
	name: "apply-history",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
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
						if (history.cv_id === payload.data?.cv_id) return false;
						else return true;
					});
				}
			})
			.addCase(applyCV.fulfilled, (state, action) => {
				state.data = [...state.data, action.payload.data!];
			});
	},
});

// export const {} = cvSlice.actions;
export const selectApplyHistory = (state: RootState) => state.applyHistory.data;

export const applyHistoryReducer = applyHistorySlice.reducer;
