import React, { useEffect, useRef, useState } from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { HeaderItem } from "./components/HeaderItem/HeaderItem";
import "./Header.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { useCookies } from "react-cookie";
import { useReduxDispatch } from "src/redux/redux-hook";
import { resetUser, updateUser } from "src/redux/slice/User";
import { useUserAuth } from "src/hooks/useUserAuth";
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
	{
		key: "cadidate",
		link: "/cadidate/profile",
		title: "Cadidate",
	},
	{
		key: "recruiter",
		link: "/recruiter/profile",
		title: "Recruiter",
	},
];
export const AppHeader = (props: HeaderProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const [first, setFirst] = useState<boolean>(false);
	const [cookies, , removeCookie] = useCookies(["user"]);
	const { isAuth, user } = useUserAuth();
	const dispatch = useReduxDispatch();
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
		removeCookie("user");
		dispatch(resetUser());
	};

	return (
		<div className="app-header" ref={ref}>
			<div className="app-logo">TDT Job Finder</div>
			<ul
				className={classNames("app-menu", {
					"is-menu-open": isMenuOpen,
				})}
			>
				{HEADER_ITEM.map((item) => {
					return <HeaderItem {...item} />;
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
						<ButtonCommon className="signup" size="small">
							<Link to={ROUTE.SIGN_UP}>Sign up</Link>
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
