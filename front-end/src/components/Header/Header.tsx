import React, { useEffect, useRef, useState, useMemo } from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { HeaderItem } from "./components/HeaderItem/HeaderItem";
import "./Header.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import { COOKIES_NAME, ROUTE } from "src/utils/contants";
import { useCookies } from "react-cookie";
import { useReduxDispatch } from "src/redux/redux-hook";
import { resetUser, updateUser } from "src/redux/slice/User";
import { useUserAuth } from "src/hooks/useUserAuth";
import { resetSignUp } from "src/redux/slice/SignUp";
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
	const [first, setFirst] = useState<boolean>(false);
	const [cookies, , removeCookie] = useCookies([COOKIES_NAME.USER]);
	const { isAuth, user } = useUserAuth();
	const navidate = useNavigate();
	const dispatch = useReduxDispatch();

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
		return HEADER_ITEM;
	}, [user, isAuth]);

	useEffect(() => {
		if (!first) {
			setFirst(true);
			if (!cookies.user) return;
			dispatch(updateUser(cookies.user));
		}
	}, [cookies, first, dispatch]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const signOut = () => {
		removeCookie(COOKIES_NAME.USER);
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
