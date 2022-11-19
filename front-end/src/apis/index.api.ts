import { AuthApi } from "./AuthApi";
import { CVApi } from "./CVApi";
import { UploadFileApi } from "./UploadFileApi";
import { UserApi } from "./UserApi";
import { UtilApi } from "./UtilApi";

class api {
	static authApi = new AuthApi();
	static utilApi = new UtilApi();
	static userApi = new UserApi();
	static cvApi = new CVApi();
	static uploadFileApi = new UploadFileApi();
}

export default api;
