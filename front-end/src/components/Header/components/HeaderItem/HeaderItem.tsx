import * as React from "react";
import { Link } from "react-router-dom";
import "./HeaderItem.scss";
export interface IHeaderItemProps {
	key: string;
	link: string;
	title: string;
	onClick?: () => void;
}

export function HeaderItem({ title, link, onClick }: IHeaderItemProps) {
	return (
		<li className="header-item" onClick={onClick}>
			<Link to={link}>{title}</Link>
		</li>
	);
}
