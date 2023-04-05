import * as React from "react";
import "./AppLayout.scss";
import { AppHeader } from "../Header/Header";
import AppContents from "../AppContents/AppContents";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
import useGetStatictisOption from "src/hooks/useGetStatictisOption";
import { GGAPI_TDTU } from "src/utils/contants";
import { gapi } from "gapi-script";
import { GoogleOAuthProvider } from "@react-oauth/google";
export interface HeaderProps {}

export function AppLayout(props: HeaderProps) {
	useGetStatictisOption();
	React.useEffect(() => {
		const initClient = () => {
			gapi.client.init({
				clientId: GGAPI_TDTU,
				scope: "",
			});
		};
		gapi.load("client:auth2", initClient);
	}, []);
	return (
		<GoogleOAuthProvider clientId={GGAPI_TDTU}>
			<div className="app-layout">
				<React.Suspense fallback={<SuspenseLoading size="large" />}>
					<CookiesProvider>
						<ScrollToTop />
						<AppHeader />
						<React.Suspense
							fallback={<SuspenseLoading size="large" />}
						>
							<AppContents>
								<Outlet />
							</AppContents>
						</React.Suspense>
						<Footer />
					</CookiesProvider>
				</React.Suspense>
			</div>
		</GoogleOAuthProvider>
	);
}
