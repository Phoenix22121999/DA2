import { BaseApi } from "./base.api";
import {
	BookmarkParameters,
	GetListBookmarkParameters,
	GetListByIdBookmarkParameters,
	UnBookmarkParameters,
} from "src/types/BookmarkType";
import { DetailRecruitmentPostUserLike } from "src/types/CombineType";
import { searchParameterBuilder } from "src/utils/function";

// user is admin
export class BookmarkApi extends BaseApi {
	constructor() {
		super("recruiter-post/");
	}

	async getListBookmark(data: GetListBookmarkParameters, token: string) {
		const params = searchParameterBuilder(data);
		return this.authGet<{}, DetailRecruitmentPostUserLike[]>(
			`list-bookmark?${params}`,
			token,
			{}
		);
	}

	async getListBookmarkById(
		data: GetListByIdBookmarkParameters,
		token: string
	) {
		const params = searchParameterBuilder(data);

		return this.authGet<{}, DetailRecruitmentPostUserLike[]>(
			`list-bookmark-by-id?${params}`,
			token,
			{}
		);
	}

	async bookmark(data: BookmarkParameters, token: string) {
		return this.authPost<BookmarkParameters, DetailRecruitmentPostUserLike>(
			"bookmark-post",
			token,
			data
		);
	}

	async unbookmark(data: UnBookmarkParameters, token: string) {
		return this.authPost<
			UnBookmarkParameters,
			DetailRecruitmentPostUserLike
		>("un-bookmark-post", token, data);
	}
}
