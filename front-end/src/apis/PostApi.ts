import { BaseApi } from "./base.api";

import { RecruitmentPost } from "src/types/Type";
import {
	CreatePostParameters,
	DeletePostParameters,
	GetPostByUserIdParameters,
	GetPostByUserParameters,
	GetPostDetailParameters,
	UpdatePostParameters,
} from "src/types/PostType";
import { SearchParameter, SearchReponse } from "src/types/SearchType";
import { searchParameterBuilder } from "src/utils/function";
import { DetailRecruitmentPost } from "src/types/CombineType";
import { ReponseWithTotal } from "src/types/ApiType";

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
	async getListPostByUser(data: GetPostByUserParameters, token: string) {
		const params = searchParameterBuilder(data);

		return this.authGet<{}, ReponseWithTotal<RecruitmentPost[]>>(
			`list-of-user?${params}`,
			token,
			{}
		);
	}
	async getListPostByUserById(
		data: GetPostByUserIdParameters,
		token: string
	) {
		const params = searchParameterBuilder(data);

		return this.authGet<{}, ReponseWithTotal<RecruitmentPost[]>>(
			`list-of-user-by-id?${params}`,
			token,
			{}
		);
	}
	async getListPostByUserById(id: number, token: string) {
		return this.authGet<{}, RecruitmentPost[]>(
			`list-of-user-by-id?user_id=${id}`,
			token,
			{}
		);
	}
	async getPostDetail(data: GetPostDetailParameters) {
		const params = searchParameterBuilder(data);

		return this.baseGet<{}, DetailRecruitmentPost>(
			`get-detail?${params}`,
			{}
		);
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
