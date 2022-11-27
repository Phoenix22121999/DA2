import {
	CreateJobTypeParameters,
	DeleteJobTypeParameters,
	UpdateJobTypeParameters,
} from "src/types/JobTypeType";
import { JobType } from "src/types/Type";
import { BaseApi } from "./base.api";
import { GetListJobTypeParameters } from "./../types/JobTypeType";
import { searchParameterBuilder } from "./../utils/function";

export class JobTypeApi extends BaseApi {
	constructor() {
		super("job-type/");
	}

	async createJobType(data: CreateJobTypeParameters, token: string) {
		return this.authPost<CreateJobTypeParameters, JobType>("", token, data);
	}
	async getListJobType(data: GetListJobTypeParameters, token: string) {
		const params = searchParameterBuilder(data);
		return this.authGet<{}, JobType[]>(`?${params}`, token, {});
	}
	async updateJobType(data: UpdateJobTypeParameters, token: string) {
		return this.authPut<UpdateJobTypeParameters, JobType>("", token, data);
	}
	async deleteJobType(data: DeleteJobTypeParameters, token: string) {
		return this.authPost<DeleteJobTypeParameters, JobType>(
			"delete",
			token,
			data
		);
	}
}
