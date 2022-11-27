import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	CreateJobTypeParameters,
	DeleteJobTypeParameters,
	UpdateJobTypeParameters,
} from "src/types/JobTypeType";
import { JobType } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import { GetListJobTypeParameters } from "./../../types/JobTypeType";

export interface JobTypeState {
	data: JobType[];
	status: "idle" | "loading" | "failed";
}

const initialState: JobTypeState = {
	data: [],
	status: "idle",
};

export const getListJobType = createAsyncThunk(
	"account-type/get-list-job-type",
	async (action: ActionPayload<GetListJobTypeParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.jobTypeApi.getListJobType(
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

export const createJobType = createAsyncThunk(
	"account-type/create",
	async (action: ActionPayload<CreateJobTypeParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.jobTypeApi.createJobType(
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

export const updateJobType = createAsyncThunk(
	"account-type/update",
	async (action: ActionPayload<UpdateJobTypeParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.jobTypeApi.updateJobType(
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

export const deleteJobType = createAsyncThunk(
	"account-type/delete",
	async (action: ActionPayload<DeleteJobTypeParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.jobTypeApi.deleteJobType(
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

export const JobTypeSlice = createSlice({
	name: "job-type",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(createJobType.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = [...state.data, action.payload.data];
				}
			})
			.addCase(updateJobType.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.map((jobType) => {
						if (jobType.id === payload.data?.id)
							return payload.data;
						else return jobType;
					});
				}
			})
			.addCase(deleteJobType.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((jobType) => {
						if (jobType.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(getListJobType.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			});
	},
});

// export const {} = JobTypeSlice.actions;
export const selectJobTypeList = (state: RootState) => state.jobType.data;

export const jobTypeReducer = JobTypeSlice.reducer;
