import { AuthApi } from "./AuthApi";
import { UserApi } from "./UserApi";
import { UtilApi } from "./UtilApi";

class api {
	static authApi = new AuthApi();
	static utilApi = new UtilApi();
	static userApi = new UserApi();
}

export default api;
