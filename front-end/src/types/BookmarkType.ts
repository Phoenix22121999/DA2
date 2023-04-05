import { PaginationParameters } from "./UtilType";

export type BookmarkParameters = {
	post_id: number;
};

export type UnBookmarkParameters = {
	post_id: number;
};

export interface GetListBookmarkParameters extends PaginationParameters {}

export interface GetListByIdBookmarkParameters extends PaginationParameters {
	user_id: number;
}
