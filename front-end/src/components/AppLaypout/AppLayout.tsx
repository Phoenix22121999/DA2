import * as React from "react";
import "./AppLayout.scss";
import { AppHeader } from "../Header/Header";
import AppContents from "../AppContents/AppContents";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { LoadingCommon } from "./../../common/index";
export interface HeaderProps {}

export function AppLayout(props: HeaderProps) {
	return (
		<div className="app-layout">
			<CookiesProvider>
				<ScrollToTop />
				<AppHeader />
				<React.Suspense
					fallback={
						<div className="loading-page">
							<LoadingCommon loading />
						</div>
					}
				>
					<AppContents>
						<Outlet />
					</AppContents>
				</React.Suspense>
				<Footer />
			</CookiesProvider>
		</div>
	);
}
