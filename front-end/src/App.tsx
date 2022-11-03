import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/theme.scss";
import { AppLayout } from "./components/AppLaypout/AppLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{
				path: "/search",
				element: <Search />,
			},
		],
	},
]);
function App() {
	return (
		<RouterProvider router={router} />
		// 	<AppLayout />
		// </RouterProvider>
	);
}

export default App;
