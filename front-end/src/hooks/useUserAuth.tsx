import { useCookies } from "react-cookie";
import { useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, selectUserToken } from "src/redux/slice/UserSilce";
import { COOKIES_NAME } from "src/utils/contants";

export const useUserAuth = () => {
	const accessToken = useReduxSelector(selectUserToken);
	const user = useReduxSelector(selectUserData);
	const [cookies] = useCookies([
		COOKIES_NAME.ACCESS_TOKEN,
		COOKIES_NAME.USER,
	]);

	return {
		isAuth: accessToken ? true : cookies["accessToken"] ? true : false,
		accessToken: accessToken,

		user: user.id ? user : cookies["user"] ? cookies["user"] : undefined,
	};
};
