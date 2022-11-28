import { BaseApi } from "./base.api";

import { RecruitmentPost } from "src/types/Type";
import {
	CreatePostParameters,
	DeletePostParameters,
	GetPostDetailParameters,
	UpdatePostParameters,
} from "src/types/PostType";
import { SearchParameter, SearchReponse } from "src/types/SearchType";
import { searchParameterBuilder } from "src/utils/function";

export class PostApi extends BaseApi {
	constructor() {
		super("recruiter-post/");
	}

	async createPost(data: CreatePostParameters, token: string) {
		return this.authPost<CreatePostParameters, RecruitmentPost>(
			"",
			token,
			data
		);
	}
	async getListPost(searchParameter: SearchParameter) {
		const params = searchParameterBuilder(searchParameter);

		return this.baseGet<{}, SearchReponse>(`?${params}`, {});
	}
	async getListPostByUser(token: string) {
		return this.authGet<{}, RecruitmentPost[]>("list-of-user", token, {});
	}
	async getListDetail(data: GetPostDetailParameters) {
		const params = searchParameterBuilder(data);

		return this.baseGet<{}, RecruitmentPost>(`?${params}`, {});
	}
	async updatePost(data: UpdatePostParameters, token: string) {
		return this.authPut<UpdatePostParameters, RecruitmentPost>(
			"",
			token,
			data
		);
	}
	async deletePost(data: DeletePostParameters, token: string) {
		return this.authPost<DeletePostParameters, RecruitmentPost>(
			"delete",
			token,
			data
		);
	}
}
