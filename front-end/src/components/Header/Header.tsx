import React, {
	useEffect,
	useRef,
	useState,
	useMemo,
	useCallback,
} from "react";
import { HeaderItem } from "./components/HeaderItem/HeaderItem";
import "./Header.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { COOKIES_NAME, GGAPI_NORMAL, ROUTE } from "src/utils/contants";
import { useCookies } from "react-cookie";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	resetUser,
	signInWithToken,
	updateUser,
} from "src/redux/slice/UserSilce";
import { useUserAuth } from "src/hooks/useUserAuth";
import { resetSignUp } from "src/redux/slice/SignUpSlice";
import { CallbackFunction } from "src/types/UtilType";
import { ButtonCommon } from "src/common";
import { useGoogleLogout } from "react-google-login";

type HeaderProps = {};
const HEADER_ITEM = [
	{
		key: "home",
		link: "/",
		title: "Home",
	},
	{
		key: "search",
		link: "/search",
		title: "Search",
	},
];
export const AppHeader = (props: HeaderProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const [first, setFirst] = useState(false);
	const [cookies, , removeCookie] = useCookies([
		COOKIES_NAME.ACCESS_TOKEN,
		COOKIES_NAME.USER,
	]);
	const { isAuth, user, accessToken } = useUserAuth();
	const navidate = useNavigate();
	const dispatch = useReduxDispatch();
	const { signOut: signOutGG } = useGoogleLogout({
		clientId: GGAPI_NORMAL || "",
		onLogoutSuccess: () => {},
	});
	const itemList = useMemo(() => {
		if (user.user_type_id === 2 && isAuth) {
			return [
				...HEADER_ITEM,
				{
					key: "cadidate",
					link: "/cadidate/profile",
					title: "Cadidate",
				},
			];
		}
		if (user.user_type_id === 3 && isAuth) {
			return [
				...HEADER_ITEM,
				{
					key: "recruiter",
					link: "/recruiter/profile",
					title: "Recruiter",
				},
			];
		}
		if (user.user_type_id === 1 && isAuth) {
			return [
				...HEADER_ITEM,
				{
					key: "admin",
					link: "/admin/",
					title: "Admin",
				},
			];
		}
		return HEADER_ITEM;
	}, [user, isAuth]);

	const callback: CallbackFunction<null> = useCallback(
		(isSuccess) => {
			if (!isSuccess) {
				removeCookie(COOKIES_NAME.ACCESS_TOKEN);
			}
		},
		[removeCookie]
	);
	useEffect(() => {
		if (!first) {
			if (cookies[COOKIES_NAME.ACCESS_TOKEN]) {
				if (!accessToken) {
					dispatch(
						updateUser({
							data: cookies[COOKIES_NAME.USER],
							AccessToken: cookies[COOKIES_NAME.ACCESS_TOKEN],
						})
					);
					dispatch(
						signInWithToken({
							payload: cookies[COOKIES_NAME.ACCESS_TOKEN],
							callback,
						})
					);
				}
			}
			setFirst(true);
		}
	}, [cookies, dispatch, accessToken, callback, first]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const signOut = () => {
		removeCookie(COOKIES_NAME.ACCESS_TOKEN);
		removeCookie(COOKIES_NAME.USER);

		signOutGG();
		dispatch(resetUser());
	};

	const signUp = () => {
		dispatch(resetSignUp());
		navidate(ROUTE.SIGN_UP);
	};

	const onItemMenuClick = () => {
		setIsMenuOpen(false);
	};

	return (
		<div className="app-header" ref={ref}>
			<div className="app-logo">TDT Job Finder</div>
			<ul
				className={classNames("app-menu", {
					"is-menu-open": isMenuOpen,
				})}
			>
				{itemList.map((item) => {
					return <HeaderItem {...item} onClick={onItemMenuClick} />;
				})}
				{/* <div className="button-group"> */}
				{isAuth ? (
					<>
						<div className="header-username">{user.username}</div>
						<ButtonCommon
							className="login"
							size="small"
							onClick={signOut}
						>
							Sign out
						</ButtonCommon>
					</>
				) : (
					<>
						<ButtonCommon
							className="signup"
							size="small"
							onClick={signUp}
						>
							Sign up
						</ButtonCommon>
						<ButtonCommon className="login" size="small">
							<Link to={ROUTE.SIGN_IN}>Sign In</Link>
						</ButtonCommon>
					</>
				)}
				{/* </div> */}
			</ul>
			<div
				className={classNames("icon-toggle", { "is-open": isMenuOpen })}
				onClick={toggleMenu}
			>
				<div className="open">
					<MenuOutlined />
				</div>
				<div className="close">
					<CloseOutlined />
				</div>
			</div>
		</div>
	);
};
