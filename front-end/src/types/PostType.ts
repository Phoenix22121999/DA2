import { RecruitmentPost } from "./Type";
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
