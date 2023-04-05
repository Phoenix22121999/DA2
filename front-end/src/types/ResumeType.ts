export type CreateEducationParameters = {
	name_school: string;
	year_start: string;
	year_end: string;
	description: string;
	majors: string;
	month_start: string;
	month_end: string;
};

export interface UpdateEducationParameters
	extends Partial<CreateEducationParameters> {
	use_education_id: number;
}

export type DeleteEducationParameters = {
	use_education_id: number;
};

export type CreateExperienceParameters = {
	name_company: string;
	position: string;
	year_start: string;
	year_end: string;
	description: string;
	month_start: string;
	month_end: string;
};

export interface UpdateExperienceParameters extends CreateExperienceParameters {
	use_experience_id: number;
}

export type DeleteExperienceParameters = {
	use_experience_id: number;
};

export type CreateAchievementParameters = {
	name_achievement: string;
	year: string;
	description: string;
	month: string;
};

export interface UpdateAchievementParameters
	extends Partial<CreateAchievementParameters> {
	use_achievement_id: number;
}

export type DeleteAchievementParameters = {
	use_achievement_id: number;
};

export type CreateProjectParameters = {
	name_project: string;
	year_start: string;
	year_end: string;
	description: string;
	month_start: string;
	month_end: string;
};

export interface UpdateProjectParameters extends CreateProjectParameters {
	use_project_id: number;
}

export type DeleteProjectParameters = {
	use_project_id: number;
};
