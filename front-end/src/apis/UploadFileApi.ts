import { BaseApi } from "./base.api";
import { CDN_URL } from "src/utils/contants";
import { FileTypeUploadReponese } from "src/types/UploadType";

export class UploadFileApi extends BaseApi {
	constructor() {
		super("cdn/", CDN_URL);
	}
	async uploadFile(data: any) {
		return this.formDataPost<any, FileTypeUploadReponese[]>(
			"upload/file",
			data
		);
	}
}
