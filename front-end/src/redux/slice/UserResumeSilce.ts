import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/apis/index.api";

import {
	UserAchievement,
	UserEducation,
	UserExperience,
	UserProject,
} from "src/types/Type";
import { ActionPayload } from "src/types/UtilType";
import { RootState } from "../store";
import { selectUserToken } from "./UserSilce";
import {
	CreateAchievementParameters,
	CreateEducationParameters,
	CreateExperienceParameters,
	CreateProjectParameters,
	DeleteAchievementParameters,
	DeleteEducationParameters,
	DeleteExperienceParameters,
	DeleteProjectParameters,
	UpdateAchievementParameters,
	UpdateEducationParameters,
	UpdateExperienceParameters,
	UpdateProjectParameters,
} from "src/types/ResumeType";
import { getAccountDetail, getAccountDetailByToken } from "./AccountSilce";

export interface UserState {
	education: UserEducation[];
	experience: UserExperience[];
	achievement: UserAchievement[];
	project: UserProject[];
	status: "idle" | "loading" | "failed";
	statistic: {
		totalResume: number;
		totalPost: number;
		// resultListResume,
		total_type_can: number;
		total_type_recruiter: number;
		total_type_admin: number;
	};
}

const initialState: UserState = {
	education: [],
	experience: [],
	achievement: [],
	project: [],
	status: "idle",
	statistic: {
		totalResume: 0,
		totalPost: 0,
		// resultListResume,
		total_type_can: 0,
		total_type_recruiter: 0,
		total_type_admin: 0,
	},
};

export const getStatistic = createAsyncThunk(
	"user/getStatistic",
	async (action: ActionPayload<null>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		const response = await api.resumeApi.getStatistic(token);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createEducation = createAsyncThunk(
	"user/create-education",
	async (action: ActionPayload<CreateEducationParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.createEducation(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateEducation = createAsyncThunk(
	"user/update-education",
	async (action: ActionPayload<UpdateEducationParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.updateEducation(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteEducation = createAsyncThunk(
	"user/delete-education",
	async (action: ActionPayload<DeleteEducationParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.deleteEducation(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createExperience = createAsyncThunk(
	"user/create-experience",
	async (action: ActionPayload<CreateExperienceParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.createExperience(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateExperience = createAsyncThunk(
	"user/update-experience",
	async (action: ActionPayload<UpdateExperienceParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.updateExperience(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteExperience = createAsyncThunk(
	"user/delete-experience",
	async (action: ActionPayload<DeleteExperienceParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.deleteExperience(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createAchievement = createAsyncThunk(
	"user/create-Achievement",
	async (
		action: ActionPayload<CreateAchievementParameters>,
		{ getState }
	) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.createAchievement(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateAchievement = createAsyncThunk(
	"user/update-Achievement",
	async (
		action: ActionPayload<UpdateAchievementParameters>,
		{ getState }
	) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.updateAchievement(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteAchievement = createAsyncThunk(
	"user/delete-Achievement",
	async (
		action: ActionPayload<DeleteAchievementParameters>,
		{ getState }
	) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.deleteAchievement(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const createProject = createAsyncThunk(
	"user/create-Project",
	async (action: ActionPayload<CreateProjectParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.createProject(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const updateProject = createAsyncThunk(
	"user/update-Project",
	async (action: ActionPayload<UpdateProjectParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.updateProject(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const deleteProject = createAsyncThunk(
	"user/delete-Project",
	async (action: ActionPayload<DeleteProjectParameters>, { getState }) => {
		const token = selectUserToken(getState() as RootState) || "";
		if (!action.payload) {
			throw new Error("need payload");
		}
		const response = await api.resumeApi.deleteProject(
			action.payload,
			token
		);
		if (response.code !== 200) {
			action.callback && action.callback(false, response);
		} else {
			action.callback && action.callback(true, response);
		}
		return response;
		// The value we return becomes the `fulfilled` action payload
	}
);

export const useResumeSlice = createSlice({
	name: "sign-up",
	initialState,
	reducers: {
		resetResume: (state) => {
			state.education = [];
			state.experience = [];
			state.achievement = [];
			state.project = [];
			state.status = "idle";
			state.statistic = {
				totalResume: 0,
				totalPost: 0,
				// resultListResume,
				total_type_can: 0,
				total_type_recruiter: 0,
				total_type_admin: 0,
			};
		},
	},
	extraReducers: (buider) => {
		buider
			.addCase(
				getAccountDetailByToken.fulfilled,
				(state, { payload }) => {
					state.education = payload.data!.user_education;
					state.experience = payload.data!.user_experience;
					state.achievement = payload.data!.user_achievement;
					state.project = payload.data!.user_project;
				}
			)
			.addCase(getStatistic.fulfilled, (state, { payload }) => {
				state.statistic = payload.data! as any;
			})
			.addCase(getAccountDetail.fulfilled, (state, { payload }) => {
				state.education = payload.data!.user_education;
				state.experience = payload.data!.user_experience;
				state.achievement = payload.data!.user_achievement;
				state.project = payload.data!.user_project;
			})
			.addCase(createEducation.fulfilled, (state, action) => {
				state.education = [...state.education, action.payload.data!];
			})
			.addCase(updateEducation.fulfilled, (state, action) => {
				state.education = state.education.map((education) => {
					if (education.id === action.payload.data!.id) {
						return action.payload.data!;
					}
					return education;
				});
			})
			.addCase(deleteEducation.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.education = state.education.filter((cv) => {
						if (cv.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(createExperience.fulfilled, (state, action) => {
				state.experience = [...state.experience, action.payload.data!];
			})
			.addCase(updateExperience.fulfilled, (state, action) => {
				state.experience = state.experience.map((experience) => {
					if (experience.id === action.payload.data!.id) {
						return action.payload.data!;
					}
					return experience;
				});
			})
			.addCase(deleteExperience.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.experience = state.experience.filter((cv) => {
						if (cv.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(createAchievement.fulfilled, (state, action) => {
				state.achievement = [
					...state.achievement,
					action.payload.data!,
				];
			})
			.addCase(updateAchievement.fulfilled, (state, action) => {
				state.achievement = state.achievement.map((Achievement) => {
					if (Achievement.id === action.payload.data!.id) {
						return action.payload.data!;
					}
					return Achievement;
				});
			})
			.addCase(deleteAchievement.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.achievement = state.achievement.filter((cv) => {
						if (cv.id === payload.data?.id) return false;
						else return true;
					});
				}
			})
			.addCase(createProject.fulfilled, (state, action) => {
				state.project = [...state.project, action.payload.data!];
			})
			.addCase(updateProject.fulfilled, (state, action) => {
				state.project = state.project.map((Project) => {
					if (Project.id === action.payload.data!.id) {
						return action.payload.data!;
					}
					return Project;
				});
			})
			.addCase(deleteProject.fulfilled, (state, { payload }) => {
				if (payload.data) {
					state.project = state.project.filter((cv) => {
						if (cv.id === payload.data?.id) return false;
						else return true;
					});
				}
			});
	},
});

export const { resetResume } = useResumeSlice.actions;
export const selectUserEducation = (state: RootState) =>
	state.useResume.education;
export const selectUserProject = (state: RootState) => state.useResume.project;
export const selectUserAchievement = (state: RootState) =>
	state.useResume.achievement;
export const selectUserExperience = (state: RootState) =>
	state.useResume.experience;
export const selectUserStatistic = (state: RootState) =>
	state.useResume.statistic;
export const userResumeReducer = useResumeSlice.reducer;
