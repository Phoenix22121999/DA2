import { BaseReponseType } from "src/types/ApiType";
import {
	API_URL,
	METHOD_AXIOS,
	CONTENT_TYPE,
	METHOD_AXIOS_ITEMS,
} from "../utils/contants";
import { serializeForm } from "../utils/function";
import axios from "axios";

export class BaseApi {
	URL: string;
	constructor(pathUrl: string, apiUrl: string = API_URL) {
		this.URL = `${apiUrl}/${pathUrl}`;
	}

	async abstract<
		ParametersType,
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(
		path: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET
	) {
		const config = {
			method,
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
			},
			url: `${this.URL}${path}`,
			data,
			withCredentials: true,
		};
		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response.data;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async abstractWithAuthCustomReponse<ParametersType, ReponseType>(
		path: string,
		token: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET
	) {
		const config = {
			method,
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				Authorization: `bearer ${token}`,
			},
			url: `${this.URL}${path}`,
			data,
			withCredentials: true,
		};
		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response.data;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async abstractWithAuth<
		ParametersType,
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(
		path: string,
		token: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET
	) {
		const config = {
			method,
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				Authorization: `bearer ${token}`,
			},
			url: `${this.URL}${path}`,
			data,
			withCredentials: true,
		};
		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response.data;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async methodWithFormData<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(
		path: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET,
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

		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response ? response.data : response;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async methodWithFormDataWithoutBasePath<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(
		path: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET,
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

		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response ? response.data : response;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async methodWithFormDataUrlEncoded<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(
		path: string,
		data: ParametersType,
		method: METHOD_AXIOS_ITEMS = METHOD_AXIOS.GET,
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

		return axios
			.request<ReponseType>(config)
			.then(function (response) {
				return response ? response.data : response;
			})
			.catch(function (err) {
				throw new Error(err.message);
			});
	}

	async baseGet<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		data: ParametersType
	) {
		return this.abstract<
			ParametersType,
			DataType,
			BaseReponseType<DataType>
		>(path, data, METHOD_AXIOS.GET);
	}

	async authGet<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		token: string,
		data: ParametersType
	) {
		return this.abstractWithAuth<
			ParametersType,
			DataType,
			BaseReponseType<DataType>
		>(path, token, data, METHOD_AXIOS.GET);
	}

	async get<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType>(
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
			BaseReponseType<DataType>
		>(path, data, METHOD_AXIOS.POST);
	}

	async formDataPost<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		data: ParametersType
	) {
		return this.methodWithFormData<
			ParametersType,
			DataType,
			BaseReponseType<DataType>
		>(path, data, METHOD_AXIOS.POST);
	}

	async authPost<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		token: string,
		data: ParametersType
	) {
		return this.abstractWithAuth<
			ParametersType,
			DataType,
			BaseReponseType<DataType>
		>(path, token, data, METHOD_AXIOS.POST);
	}

	async post<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType>(
			path,
			data,
			METHOD_AXIOS.POST
		);
	}

	async authCustomResponsePost<
		ParametersType extends { [key: string]: any },
		ReponseType
	>(path: string, token: string, data: ParametersType) {
		return this.abstractWithAuthCustomReponse<ParametersType, ReponseType>(
			path,
			token,
			data,
			METHOD_AXIOS.POST
		);
	}

	async put<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType>(
			path,
			data,
			METHOD_AXIOS.PUT
		);
	}

	async authPut<ParametersType extends { [key: string]: any }, DataType>(
		path: string,
		token: string,
		data: ParametersType
	) {
		return this.abstractWithAuth<
			ParametersType,
			DataType,
			BaseReponseType<DataType>
		>(path, token, data, METHOD_AXIOS.PUT);
	}
	async delete<
		ParametersType extends { [key: string]: any },
		DataType,
		ReponseType extends BaseReponseType<DataType>
	>(path: string, data: ParametersType) {
		return this.abstract<ParametersType, DataType, ReponseType>(
			path,
			data,
			METHOD_AXIOS.DELETE
		);
	}
}
