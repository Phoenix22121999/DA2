import { PaginationParameters } from "./UtilType";

export type a = {
	cv_id: number;
	post_id: number;
};

export type s = {
	cv_id: number;
	post_id: number;
};

export interface GetRecruiterHistoryListParameters
	extends PaginationParameters {}

export interface GetCandidateHistoryListParameters
	extends PaginationParameters {}

export interface GetRecruiterHistoryListByIdParameters
	extends GetRecruiterHistoryListParameters {
	user_id: number;
}

export interface GetCandidateHistoryListByIdParameters
	extends GetCandidateHistoryListParameters {
	user_id: number;
}
