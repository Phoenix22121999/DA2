import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "src/apis/index.api";
import { ApplyParameter, UnApplyParameter } from "src/types/ApplyType";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";

export const applyCV = createAsyncThunk(
	"cv/apply",
	async (action: ActionPayload<ApplyParameter>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyApi.apply(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const unApplyCV = createAsyncThunk(
	"cv/un-apply",
	async (action: ActionPayload<UnApplyParameter>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.applyApi.unApply(action.payload, token);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);
