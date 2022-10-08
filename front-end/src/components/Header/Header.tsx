import { Button } from "antd";
import React, { useState } from "react";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import Logo from "../icons/Logo/Logo";
import { HeaderItem } from "./components/HeaderItem/HeaderItem";
import "./Header.scss";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
type HeaderProps = {};
const HEADER_ITEM = [
	{
		key: "home",
		link: "/",
		title: "Home",
	},
	{
		key: "about",
		link: "/",
		title: "About",
	},
];
export const AppHeader = (props: HeaderProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div className="app-header">
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
				<ButtonCommon className="signup">sign up</ButtonCommon>
				<ButtonCommon className="login">login</ButtonCommon>
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
