import { RecruitmentPost, UserAccount } from "./Type";

export interface RecruitmentPostWithUser extends RecruitmentPost {
	user: UserAccount;
}
