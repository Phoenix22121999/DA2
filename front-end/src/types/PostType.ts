import { RecruitmentPost } from "./Type";

export type CreatePostParameters = {
	title: string;
	content: string;
	to_value: number;
	from_value: number;
	is_active: boolean;
	is_delete: boolean;
};
export interface UpdatePostParameters
	extends Omit<Partial<RecruitmentPost>, "id"> {
	post_id: number;
}

export type DeletePostParameters = {
	post_id: number;
};
