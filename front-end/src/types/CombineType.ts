import {
	JobType,
	Majors,
	RecruitmentPost,
	RecruitmentPostJobType,
	UserAccount,
} from "./Type";

export interface RecruitmentPostWithUser extends RecruitmentPost {
	user: UserAccount;
}
export interface DetailRecruitmentPost extends RecruitmentPost {
	user: UserAccount;
	post_majors: Pick<RecruitmentPostJobType, "id">[];
	post_job_types: JobType[];
}
