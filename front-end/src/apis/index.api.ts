import { AccountTypeApi } from "./AccountTypeApi";
import { AuthApi } from "./AuthApi";
import { CVApi } from "./CVApi";
import { FileApi } from "./FileApi";
import { PostApi } from "./PostApi";
import { UserApi } from "./UserApi";
import { UtilApi } from "./UtilApi";
import { JobTypeApi } from "./JobTypeApi";
import { MajorApi } from "./MajorApi";
import { LocationApi } from "./LocationApi";

class api {
	static authApi = new AuthApi();
	static utilApi = new UtilApi();
	static userApi = new UserApi();
	static cvApi = new CVApi();
	static fileApi = new FileApi();
	static postApi = new PostApi();
	static accountTypeApi = new AccountTypeApi();
	static jobTypeApi = new JobTypeApi();
	static majorApi = new MajorApi();
	static locationApi = new LocationApi();
}

export default api;
