import * as React from "react";
import "./HeaderItem.scss";
export interface IHeaderItemProps {
	key: string;
	link: string;
	title: string;
}

export function HeaderItem({ title }: IHeaderItemProps) {
	return <li className="header-item">{title}</li>;
}
