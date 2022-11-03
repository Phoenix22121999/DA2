import * as React from "react";
import { Link } from "react-router-dom";
import "./HeaderItem.scss";
export interface IHeaderItemProps {
	key: string;
	link: string;
	title: string;
}

export function HeaderItem({ title, link }: IHeaderItemProps) {
	return (
		<li className="header-item">
			<Link to={link}>{title}</Link>
		</li>
	);
}
