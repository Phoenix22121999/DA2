import { BaseApi } from "./base.api";

import { RecruitmentPost } from "src/types/Type";
import {
	CreatePostParameters,
	DeletePostParameters,
	UpdatePostParameters,
} from "src/types/PostType";

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
	async getListPost() {
		return this.baseGet<{}, RecruitmentPost[]>("", {});
	}
	async getListPostByUser(token: string) {
		return this.authGet<{}, RecruitmentPost[]>("", token, {});
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
