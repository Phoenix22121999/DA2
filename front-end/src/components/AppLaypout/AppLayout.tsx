import * as React from "react";
import "./AppLayout.scss";
import { AppHeader } from "../Header/Header";
import AppContents from "../AppContents/AppContents";
export interface HeaderProps {}

export function AppLayout(props: HeaderProps) {
	return (
		<div className="app-layout">
			<AppHeader />
			<AppContents />
		</div>
	);
}
