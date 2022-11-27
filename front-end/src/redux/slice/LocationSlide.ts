import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { Districts, Provinces, Wards } from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";

export interface AccountTypeState {
	provinces: Provinces[];
	district: Districts[];
	ward: Wards[];
}

const initialState: AccountTypeState = {
	provinces: [],
	district: [],
	ward: [],
};

export const getProvinces = createAsyncThunk(
	"location/get-provinces",
	async (action: ActionPayload<null>, { getState }) => {
		const response = await api.locationApi.getProvinces();
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getDistrict = createAsyncThunk(
	"location/get-district",
	async (action: ActionPayload<string>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.locationApi.getDistrict(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const getWard = createAsyncThunk(
	"location/get-ward",
	async (action: ActionPayload<string>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.locationApi.getWard(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const LocationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
	},
	extraReducers: (buider) => {
		buider
			.addCase(getProvinces.fulfilled, (state, action) => {
				state.provinces = action.payload.data!;
			})
			.addCase(getDistrict.fulfilled, (state, action) => {
				state.district = action.payload.data!;
			})
			.addCase(getWard.fulfilled, (state, action) => {
				state.ward = action.payload.data!;
			});
	},
});

// export const {} = AccountTypeSlice.actions;
export const selectProvinces = (state: RootState) => state.location.provinces;
export const selectDistrict = (state: RootState) => state.location.district;
export const selectWard = (state: RootState) => state.location.ward;

export const locationReducer = LocationSlice.reducer;
