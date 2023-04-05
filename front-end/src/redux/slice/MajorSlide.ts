import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	CreateMajorParameters,
	DeleteMajorParameters,
	GetMajorListParameters,
	UpdateMajorParameters,
} from "src/types/MajorType";
import { Majors } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";

export interface MajorState {
	data: Majors[];
	status: "idle" | "loading" | "failed";
}

const initialState: MajorState = {
	data: [],
	status: "idle",
};

export const getListMajor = createAsyncThunk(
	"major/git-list-major",
	async (action: ActionPayload<GetMajorListParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.majorApi.getListMajor(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createMajor = createAsyncThunk(
	"major/create",
	async (action: ActionPayload<CreateMajorParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.majorApi.createMajor(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateMajor = createAsyncThunk(
	"major/update",
	async (action: ActionPayload<UpdateMajorParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.majorApi.updateMajor(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteMajor = createAsyncThunk(
	"major/delete",
	async (action: ActionPayload<DeleteMajorParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.majorApi.deleteMajor(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const MajorSlice = createSlice({
	name: "major",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(createMajor.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = [...state.data, action.payload.data];
				}
			})
			.addCase(updateMajor.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.map((major) => {
						if (major.id === payload.data?.id) return payload.data;
						else return major;
					});
				}
			})
			.addCase(deleteMajor.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((major) => {
						if (major.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(getListMajor.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			});
	},
});

// export const {} = MajorSlice.actions;
export const selectMajorList = (state: RootState) => state.major.data;

export const majorReducer = MajorSlice.reducer;
