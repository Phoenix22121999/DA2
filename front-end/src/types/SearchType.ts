import { DetailRecruitmentPostWithoutContent } from "./CombineType";

export type SearchParameter = {
	key_word?: string;
	from_value?: number;
	to_value?: number;
	province_code?: string;
	district_code?: string;
	ward_code?: string;
	list_job_type?: string[];
	list_major?: string[];
	page?: number;
	item_per_page?: number;
	date_post?: string;
};

export type SearchReponse = {
	result: DetailRecruitmentPostWithoutContent[];
	total: number;
};
