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
		<Link to={link} className="header-item">
			<li className="header-item-inner" onClick={onClick}>
				{title}
			</li>
		</Link>
	);
}
