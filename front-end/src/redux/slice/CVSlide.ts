import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import {
	CreateCVParameters,
	DeleteCVParameters,
	UpdateCVParameters,
} from "src/types/CVType";
import { CV } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";

export interface CVType {
	cvName: string;
	fileName: string;
}

export interface CVState {
	data: CV[];
	currentStep: number;
	status: "idle" | "loading" | "failed";
}

const initialState: CVState = {
	data: [],
	currentStep: 0,
	status: "idle",
};

export const createCV = createAsyncThunk(
	"cv/create",
	async (action: ActionPayload<CreateCVParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.cvApi.createCV(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateCV = createAsyncThunk(
	"cv/update",
	async (action: ActionPayload<UpdateCVParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.cvApi.updateCV(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteCV = createAsyncThunk(
	"cv/delete",
	async (action: ActionPayload<DeleteCVParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.cvApi.deleteCV(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getListCV = createAsyncThunk(
	"cv/get-list",
	async (action: ActionPayload, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.cvApi.getList(token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const cvSlice = createSlice({
	name: "cv",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(createCV.fulfilled, (state, action) => {
				if (action.payload.data) {
					state.data = [...state.data, action.payload.data];
				}
			})
			.addCase(updateCV.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.map((cv) => {
						if (cv.id === payload.data?.id) return payload.data;
						else return cv;
					});
				}
			})
			.addCase(deleteCV.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.data = state.data.filter((cv) => {
						if (cv.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(getListCV.fulfilled, (state, action) => {
				state.data = action.payload.data!;
			});
	},
});

// export const {} = cvSlice.actions;
export const selectCVList = (state: RootState) => state.cv.data;

export const cvReducer = cvSlice.reducer;
