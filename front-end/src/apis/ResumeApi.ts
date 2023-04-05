import { BaseApi } from "./base.api";
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
import {
	UserAchievement,
	UserEducation,
	UserExperience,
	UserProject,
} from "src/types/Type";

export class ResumeApi extends BaseApi {
	constructor() {
		super("feature/");
	}

	async getStatistic(token: string) {
		return this.authGet<{}, UserEducation>(`all`, token, {});
	}

	async createEducation(data: CreateEducationParameters, token: string) {
		return this.authPost<CreateEducationParameters, UserEducation>(
			`user-education`,
			token,
			data
		);
	}
	async updateEducation(data: UpdateEducationParameters, token: string) {
		return this.authPut<UpdateEducationParameters, UserEducation>(
			`user-education`,
			token,
			data
		);
	}
	async deleteEducation(data: DeleteEducationParameters, token: string) {
		return this.authPost<DeleteEducationParameters, UserEducation>(
			`user-education/delete`,
			token,
			data
		);
	}

	async createExperience(data: CreateExperienceParameters, token: string) {
		return this.authPost<CreateExperienceParameters, UserExperience>(
			`user-experience`,
			token,
			data
		);
	}
	async updateExperience(data: UpdateExperienceParameters, token: string) {
		return this.authPut<UpdateExperienceParameters, UserExperience>(
			`user-experience`,
			token,
			data
		);
	}
	async deleteExperience(data: DeleteExperienceParameters, token: string) {
		return this.authPost<DeleteExperienceParameters, UserExperience>(
			`user-experience/delete`,
			token,
			data
		);
	}
	async createAchievement(data: CreateAchievementParameters, token: string) {
		return this.authPost<CreateAchievementParameters, UserAchievement>(
			`user-achievement`,
			token,
			data
		);
	}
	async updateAchievement(data: UpdateAchievementParameters, token: string) {
		return this.authPut<UpdateAchievementParameters, UserAchievement>(
			`user-achievement`,
			token,
			data
		);
	}
	async deleteAchievement(data: DeleteAchievementParameters, token: string) {
		return this.authPost<DeleteAchievementParameters, UserAchievement>(
			`user-achievement/delete`,
			token,
			data
		);
	}

	async createProject(data: CreateProjectParameters, token: string) {
		return this.authPost<CreateProjectParameters, UserProject>(
			`user-project`,
			token,
			data
		);
	}
	async updateProject(data: UpdateProjectParameters, token: string) {
		return this.authPut<UpdateProjectParameters, UserProject>(
			`user-project`,
			token,
			data
		);
	}
	async deleteProject(data: DeleteProjectParameters, token: string) {
		return this.authPost<DeleteProjectParameters, UserProject>(
			`user-project/delete`,
			token,
			data
		);
	}
}
