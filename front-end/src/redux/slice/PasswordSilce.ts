import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	ForgotPasswordParameters,
	ResetPasswordParameters,
} from "src/types/PasswordType";
import { ActionPayload } from "src/types/UtilType";
import api from "src/apis/index.api";

export const sendForgotPasswordMail = createAsyncThunk(
	"password/send-mail",
	async (action: ActionPayload<ForgotPasswordParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.passwordApi.sendForgotPasswordMail(
			action.payload
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

export const resetPassword = createAsyncThunk(
	"password/send-mail",
	async (action: ActionPayload<ResetPasswordParameters>, { getState }) => {
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.passwordApi.resetPassword(action.payload);
		if (response.code !== 200) {
			action.callback && action.callback(false, null);
		} else {
			action.callback && action.callback(true, null);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);
