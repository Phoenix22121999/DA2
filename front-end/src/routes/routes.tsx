import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "src/components/AppLaypout/AppLayout";
import {
	AdminDashboardPage,
	CandidateDashboardPage,
	ForgotPasswordPage,
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
	AccountDetailPage,
	AccountManagerPage,
	AccountTypeManagerPage,
	AdminPostDetailPage,
	AllApplicantPage,
	AllPostPage,
	AppliedJobsPage,
	BookmarkManagerPage,
	CandidateProfilePage,
	ChangePasswordPage,
	CVManagerPage,
	EditPostPage,
	JobManagerPage,
	JobTypeManagerPage,
	MajorManagerPage,
	PostJobPage,
	RecruiterProfilePage,
	StatisticPage,
} from "src/subpage";
import RequestManager from "src/subpage/RequestManager/RequestManager";

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
				path: "forgot-password",
				element: <ForgotPasswordPage />,
			},
			{
				path: "post-detail/:postID",
				element: <JobPostDetailPage />,
			},
			{
				path: "account-detail",
				element: <AccountDetailPage />,
			},
			{
				path: "admin",
				element: <AdminDashboardPage />,
				children: [
					{
						path: "accounts",
						element: <AccountManagerPage />,
					},
					{
						path: "dashboard",
						element: <StatisticPage />,
					},
					{
						path: "all-post",
						element: <AllPostPage />,
					},
					{
						path: "detail-post/:postId",
						element: <AdminPostDetailPage />,
					},
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
					{
						path: "request",
						element: <RequestManager />,
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
						path: "bookmark-manager",
						element: <BookmarkManagerPage />,
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
