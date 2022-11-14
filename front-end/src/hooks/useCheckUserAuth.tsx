import { useUserAuth } from "./useUserAuth";
export type CheckUserAuthResult =
	| "isAuthRightUserType"
	| "notAuth"
	| "isAuthDontRightUserType";
export const useCheckUserAuth = (userTypeId: number) => {
	const { isAuth, user } = useUserAuth();
	if (!isAuth) {
		return false;
	}
	if (Number(user.user_type_id) !== userTypeId) {
		return false;
	}
	return true;
};
