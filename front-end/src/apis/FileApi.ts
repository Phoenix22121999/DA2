import { BaseApi } from "./base.api";
import { CDN_URL } from "src/utils/contants";
import { FileTypeUploadReponese } from "src/types/UploadType";
import { DownloadCVParameters } from "src/types/CVType";

export class FileApi extends BaseApi {
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
