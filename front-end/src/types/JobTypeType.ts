import { PaginationParameters } from "./UtilType";

export interface GetListJobTypeParameters extends PaginationParameters {
	key_word?: string;
}

export type CreateJobTypeParameters = {
	job_type_name: string;
};

export interface UpdateJobTypeParameters {
	job_type_id: number;
	job_type_name: string;
}

export type DeleteJobTypeParameters = {
	job_type_id: number;
};
