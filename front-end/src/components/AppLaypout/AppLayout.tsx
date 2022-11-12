import * as React from "react";
import "./AppLayout.scss";
import { AppHeader } from "../Header/Header";
import AppContents from "../AppContents/AppContents";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
export interface HeaderProps {}

export function AppLayout(props: HeaderProps) {
	return (
		<div className="app-layout">
			<CookiesProvider>
				<AppHeader />
				<AppContents>
					<Outlet />
				</AppContents>
				<Footer />
			</CookiesProvider>
		</div>
	);
}
