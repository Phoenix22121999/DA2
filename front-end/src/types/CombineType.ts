import {
	JobType,
	Majors,
	RecruitmentPost,
	RecruitmentPostJobType,
	RecruitmentPostMajors,
	UserAccount,
} from "./Type";

export interface RecruitmentPostWithUser extends RecruitmentPost {
	user: UserAccount;
}

export interface DetailRecruitmentPostWithoutContent
	extends Omit<RecruitmentPost, "content"> {
	user: UserAccount;
	post_majors: RecruitmentPostMajorsWithMajors[];
	post_job_types: RecruitmentPostJobTypeWithJobType[];
}

export interface DetailRecruitmentPost extends RecruitmentPost {
	user: UserAccount;
	post_majors: RecruitmentPostMajorsWithMajors[];
	post_job_types: RecruitmentPostJobTypeWithJobType[];
}

export interface RecruitmentPostMajorsWithMajors
	extends Pick<RecruitmentPostMajors, "id"> {
	majors: Pick<Majors, "id" | "majors_name">;
}

export interface RecruitmentPostJobTypeWithJobType
	extends Pick<RecruitmentPostJobType, "id"> {
	job_type: Pick<JobType, "id" | "job_type_name">;
}
