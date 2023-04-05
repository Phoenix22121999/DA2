import { SORT_ORDER_ITEMS, SORT_TYPE_ITEMS } from "src/utils/contants";
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
	gender?: number;
	page?: number;
	item_per_page?: number;
	date_post?: string;
	sort_by?: SORT_TYPE_ITEMS;
	sort_order?: SORT_ORDER_ITEMS;
};

export type SearchReponse = {
	result: DetailRecruitmentPostWithoutContent[];
	total: number;
};
