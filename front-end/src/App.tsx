import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/theme.scss";
import { AppLayout } from "./components/AppLaypout/AppLayout";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { CandidateDashboard } from "./pages/CandidateDashboard/CandidateDashboard";
import CVManager from "./components/CVManager/CVManager";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import { RecruiterDashboard } from "./pages/RecruiterDashboard/RecruiterDashboard";
import CadidateProfile from "./components/CadidateProfile/CandidateProfile";
import RecruiterProfile from "./components/RecruiterProfile/RecruiterProfile";
import JobManager from "./components/JobManager/JobManager";
import AllApplicant from "./components/AllApplicant/AllApplicant";
import JobPostDetail from "./pages/JobPostDetail/JobPostDetail";
import PostJob from "./components/PostJob/PostJob";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Home />, index: true },
			{
				path: "search",
				element: <Search />,
			},
			{
				path: "sign-up",
				element: <SignUp />,
			},
			{
				path: "sign-in",
				element: <SignIn />,
			},
			{
				path: "post-detail/:postID",
				element: <JobPostDetail />,
			},

			{
				path: "cadidate",
				element: <CandidateDashboard />,
				children: [
					{
						path: "profile",
						element: <CadidateProfile />,
					},
					{
						path: "cv-manager",
						element: <CVManager />,
					},
					{
						path: "applied-jobs",
						element: <AppliedJobs />,
					},
					{
						path: "change-password",
						element: <ChangePassword />,
					},
				],
			},
			{
				path: "recruiter",
				element: <RecruiterDashboard />,
				children: [
					{
						path: "profile",
						element: <RecruiterProfile />,
					},
					{
						path: "post-new-job",
						element: <PostJob />,
					},
					{
						path: "job-manager",
						element: <JobManager />,
					},
					{
						path: "all-applicants",
						element: <AllApplicant />,
					},
					{
						path: "change-password",
						element: <ChangePassword />,
					},
				],
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
