import { BaseErrorType, BaseReponseType } from "src/types/ApiType";
import { API_URL, METHOD_AXIOS, CONTENT_TYPE } from "../utils/contants";
import { serializeForm } from "../utils/function";
const axios = require("axios");

export class BaseApi {
	URL: string;
	constructor(pathUrl: string) {
		this.URL = `${API_URL}/${pathUrl}`;
	}
	async abstract<
		ParametersType,
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(path: string, data: ParametersType, method = METHOD_AXIOS.GET) {
		const config = {
			method,
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
			url: `${this.URL}${path}`,
			data,
			withCredentials: true,
		};

		return axios(config)
			.then(function (response: ReponseType) {
				return response ? response.data : response;
			})
			.catch(function (err: ErrorType) {
				throw new Error(err.message);
			});
	}

	async methodWithFormData<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(
		path: string,
		data: ParametersType,
		method = METHOD_AXIOS.GET,
		contentType = CONTENT_TYPE.MULTIPART_FORM_DATA
	) {
		// eslint-disable-next-line no-undef
		var bodyFormData = new FormData();
		Object.keys(data).map((item) => {
			bodyFormData.append(item, data[item]);
			return null;
		});
		const config = {
			method,
			url: `${this.URL}${path}`,
			data: bodyFormData,
			headers: {
				"Content-Type": contentType,
			},
			withCredentials: true,
		};

		return axios(config)
			.then(function (response: ReponseType) {
				return response ? response.data : response;
			})
			.catch(function (err: ErrorType) {
				throw new Error(err.message);
			});
	}

	async methodWithFormDataWithoutBasePath<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(
		path: string,
		data: ParametersType,
		method = METHOD_AXIOS.GET,
		contentType = CONTENT_TYPE.MULTIPART_FORM_DATA
	) {
		// eslint-disable-next-line no-undef
		var bodyFormData = new FormData();
		Object.keys(data).map((item) => {
			bodyFormData.append(item, data[item]);
			return null;
		});
		const config = {
			method,
			url: `${path}`,
			data: bodyFormData,
			headers: {
				"Content-Type": contentType,
			},
			withCredentials: true,
		};

		return axios(config)
			.then(function (response: ReponseType) {
				return response ? response.data : response;
			})
			.catch(function (err: ErrorType) {
				throw new Error(err.message);
			});
	}

	async methodWithFormDataUrlEncoded<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(
		path: string,
		data: ParametersType,
		method = METHOD_AXIOS.GET,
		contentType = CONTENT_TYPE.FORM_URLENCODED
	) {
		var bodyFormData = serializeForm(data);
		const config = {
			method,
			url: `${this.URL}${path}`,
			data: bodyFormData,
			headers: {
				"Content-Type": contentType,
			},
			withCredentials: true,
		};

		return axios(config)
			.then(function (response: ReponseType) {
				return response ? response.data : response;
			})
			.catch(function (err: ErrorType) {
				throw new Error(err.message);
			});
	}

	async get<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType, ErrorType>(
			path,
			data,
			METHOD_AXIOS.GET
		);
	}
	async basePost<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		data: ParametersType
	) {
		return this.abstract<
			ParametersType,
			DataType,
			BaseReponseType<DataType>,
			BaseErrorType
		>(path, data, METHOD_AXIOS.POST);
	}
	async post<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType, ErrorType>(
			path,
			data,
			METHOD_AXIOS.POST
		);
	}
	async put<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType, ErrorType>(
			path,
			data,
			METHOD_AXIOS.PUT
		);
	}
	async delete<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>,
		ErrorType extends BaseErrorType
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType, ErrorType>(
			path,
			data,
			METHOD_AXIOS.DELETE
		);
	}
}
