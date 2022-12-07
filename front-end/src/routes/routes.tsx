import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "src/components/AppLaypout/AppLayout";
import {
	AdminDashboardPage,
	CandidateDashboardPage,
	HomePage,
	JobPostDetailPage,
	RecruiterDashboardPage,
	SearchPage,
	SignInPage,
	SignUpPage,
} from "src/pages";
import Error from "src/pages/Error/Error";
import Test from "src/pages/Test/Test";
import {
	AccountTypeManagerPage,
	AllApplicantPage,
	AppliedJobsPage,
	CandidateProfilePage,
	ChangePasswordPage,
	CVManagerPage,
	EditPostPage,
	JobManagerPage,
	JobTypeManagerPage,
	MajorManagerPage,
	PostJobPage,
	RecruiterProfilePage,
} from "src/subpage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
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
				element: <JobPostDetailPage />,
			},
			{
				path: "admin",
				element: <AdminDashboardPage />,
				children: [
					{
						path: "account-type",
						element: <AccountTypeManagerPage />,
					},
					{
						path: "job-type",
						element: <JobTypeManagerPage />,
					},
					{
						path: "major",
						element: <MajorManagerPage />,
					},
				],
			},
			{
				path: "cadidate",
				element: <CandidateDashboardPage />,
				children: [
					{
						path: "profile",
						element: <CandidateProfilePage />,
					},
					{
						path: "cv-manager",
						element: <CVManagerPage />,
					},
					{
						path: "applied-jobs",
						element: <AppliedJobsPage />,
					},
					{
						path: "change-password",
						element: <ChangePasswordPage />,
					},
				],
			},
			{
				path: "recruiter",
				element: <RecruiterDashboardPage />,
				children: [
					{
						path: "profile",
						element: <RecruiterProfilePage />,
					},
					{
						path: "job-manager/post-new-job",
						element: <PostJobPage />,
					},
					{
						path: "job-manager/edit-job",
						element: <EditPostPage />,
					},
					{
						path: "job-manager",
						element: <JobManagerPage />,
					},
					{
						path: "all-applicants",
						element: <AllApplicantPage />,
					},
					{
						path: "change-password",
						element: <ChangePasswordPage />,
					},
				],
			},
		],
	},
]);
