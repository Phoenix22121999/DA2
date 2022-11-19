import { useReduxSelector } from "src/redux/redux-hook";
import { selectUserData, selectUserToken } from "src/redux/slice/UserSilce";

export const useUserAuth = () => {
	const accessToken = useReduxSelector(selectUserToken);
	const user = useReduxSelector(selectUserData);
	return {
		isAuth: accessToken ? true : false,
		accessToken,
		user,
	};
};
