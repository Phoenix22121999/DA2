import {
	JobType,
	Majors,
	Provinces,
	RecruitmentPost,
	RecruitmentPostJobType,
	RecruitmentPostMajors,
	UserAccount,
	Districts,
	Wards,
	HistoryApplyJob,
	CV,
	UserType,
	RecruitmentPostUserLike,
	UserEducation,
	UserExperience,
	UserAchievement,
	UserProject,
} from "./Type";

export interface DetailUserAccount extends UserAccount {
	provinces: Provinces;
	districts: Districts;
	wards: Wards;
	user_type: UserType;
	user_education: UserEducation[];
	user_experience: UserExperience[];
	user_achievement: UserAchievement[];
	user_project: UserProject[];
}
export interface UserAccountWithUserType extends UserAccount {
	user_type: UserType;
}
export interface RecruitmentPostWithUser extends RecruitmentPost {
	user: DetailUserAccount;
}

export interface DetailRecruitmentPost extends RecruitmentPost {
	user: DetailUserAccount;
	post_majors: RecruitmentPostMajorsWithMajors[];
	post_job_types: RecruitmentPostJobTypeWithJobType[];
	provinces: Provinces;
	districts: Districts;
	wards: Wards;
}

export interface DetailRecruitmentPostWithoutContent
	extends Omit<DetailRecruitmentPost, "content"> {}
export interface RecruitmentPostMajorsWithMajors
	extends Pick<RecruitmentPostMajors, "id"> {
	majors: Pick<Majors, "id" | "majors_name">;
}

export interface RecruitmentPostJobTypeWithJobType
	extends Pick<RecruitmentPostJobType, "id"> {
	job_type: Pick<JobType, "id" | "job_type_name">;
}

export interface RecruitmentPostJobTypeWithJobTypeAndMajor
	extends Pick<RecruitmentPostJobType, "id"> {
	post_job_types: Pick<JobType, "id" | "job_type_name">;
	post_majors: Pick<Majors, "id" | "majors_name">;
}

export interface DetailHistoryApplyJob extends HistoryApplyJob {
	user_account: DetailUserAccount;
	Recruitment_Post: RecruitmentPostJobTypeWithJobTypeAndMajor;
	cv: CV;
}

export interface DetailRecruitmentPostUserLike extends RecruitmentPostUserLike {
	user_account: DetailUserAccount;
	Recruitment_Post: RecruitmentPostJobTypeWithJobTypeAndMajor;
}
