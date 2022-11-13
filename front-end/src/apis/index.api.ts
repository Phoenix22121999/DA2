import { AuthApi } from "./AuthApi";
import { UtilApi } from "./UtilApi";

class api {
	static authApi = new AuthApi();
	static utilApi = new UtilApi();
}

export default api;
