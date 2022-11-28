import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./styles/theme.scss";
import { AppLayout } from "./components/AppLaypout/AppLayout";
import CVManager from "./components/CVManager/CVManager";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import CadidateProfile from "./components/CadidateProfile/CandidateProfile";
import RecruiterProfile from "./components/RecruiterProfile/RecruiterProfile";
import JobManager from "./components/JobManager/JobManager";
import AllApplicant from "./components/AllApplicant/AllApplicant";
import JobPostDetail from "./pages/JobPostDetail/JobPostDetail";
import PostJob from "./components/PostJob/PostJob";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import EditPost from "./components/EditPost/EditPost";
import AccountTypeManager from "./components/AccountTypeManager/AccountTypeManager";
import JobTypeManager from "./components/JobTypeManager/JobTypeManager";
import MajorManager from "./components/MajorManager/MajorManager";
import Test from "./pages/Test/Test";
import {
	AdminDashboardPage,
	CandidateDashboardPage,
	HomePage,
	RecruiterDashboardPage,
	SearchPage,
	SignInPage,
	SignUpPage,
} from "./pages";
const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <HomePage />, index: true },
			{ path: "test", element: <Test /> },
			{
				path: "search",
				element: <SearchPage />,
			},
			{
				path: "sign-up",
				element: <SignUpPage />,
			},
			{
				path: "sign-in",
				element: <SignInPage />,
			},
			{
				path: "post-detail/:postID",
				element: <JobPostDetail />,
			},
			{
				path: "admin",
				element: <AdminDashboardPage />,
				children: [
					{
						path: "account-type",
						element: <AccountTypeManager />,
					},
					{
						path: "job-type",
						element: <JobTypeManager />,
					},
					{
						path: "major",
						element: <MajorManager />,
					},
				],
			},
			{
				path: "cadidate",
				element: <CandidateDashboardPage />,
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
				element: <RecruiterDashboardPage />,
				children: [
					{
						path: "profile",
						element: <RecruiterProfile />,
					},
					{
						path: "job-manager/post-new-job",
						element: <PostJob />,
					},
					{
						path: "job-manager/edit-job",
						element: <EditPost />,
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
	pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

	return (
		<RouterProvider router={router} />
		// 	<AppLayout />
		// </RouterProvider>
	);
}

export default App;
