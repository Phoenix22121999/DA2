import { KeyWordParameters, PaginationParameters } from "./UtilType";
export interface ListJobType {
	job_type_id: number;
}
export interface ListMajor {
	majors_id: number;
}
export type CreatePostParameters = {
	title: string;
	content: string;
	to_value: number;
	from_value: number;
	is_active: boolean;
	is_delete: boolean;
	province_code: string;
	district_code: string;
	ward_code: string;
	address: string;
	list_job_type: ListJobType[];
	list_major: ListMajor[];
	gender: number;
};

export interface UpdatePostParameters
	extends Omit<Partial<CreatePostParameters>, "id"> {
	post_id: number;
}

export type DeletePostParameters = {
	post_id: number;
};

export type GetPostDetailParameters = {
	post_id: number;
};
export interface GetPostByUserParameters
	extends PaginationParameters,
		KeyWordParameters {}
export interface GetPostByUserIdParameters
	extends PaginationParameters,
		KeyWordParameters {
	user_id: number;
}
