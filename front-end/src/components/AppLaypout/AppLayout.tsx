import * as React from "react";
import "./AppLayout.scss";
import { AppHeader } from "../Header/Header";
import AppContents from "../AppContents/AppContents";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export interface HeaderProps {}

export function AppLayout(props: HeaderProps) {
	return (
		<div className="app-layout">
			<AppHeader />
			<AppContents>
				<Outlet />
			</AppContents>
			<Footer />
		</div>
	);
}
