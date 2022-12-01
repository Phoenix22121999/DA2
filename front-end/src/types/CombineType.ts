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
} from "./Type";

export interface RecruitmentPostWithUser extends RecruitmentPost {
	user: UserAccount;
}

export interface DetailRecruitmentPost extends RecruitmentPost {
	user: UserAccount;
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
	user_account: UserAccount;
	Recruitment_Post: RecruitmentPostJobTypeWithJobTypeAndMajor;
	cv: CV;
}
