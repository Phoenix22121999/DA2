import { RecruitmentPostWithUser } from "./CombineType";

export type SearchParameter = {
	key_word?: string;
	from_value?: number;
	to_value?: number;
	page?: number;
	item_per_page?: number;
};

export type SearchReponse = {
	result: RecruitmentPostWithUser[];
	total: number;
};
