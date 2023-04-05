import React from "react";
import Home from "./Home/Home";

export const HomePage = Home;
export const AdminDashboardPage = React.lazy(
	() => import("./AdminDashboard/AdminDashboard")
);
export const CandidateDashboardPage = React.lazy(
	() => import("./CandidateDashboard/CandidateDashboard")
);
export const RecruiterDashboardPage = React.lazy(
	() => import("./RecruiterDashboard/RecruiterDashboard")
);
export const JobPostDetailPage = React.lazy(
	() => import("./JobPostDetail/JobPostDetail")
);
export const SearchPage = React.lazy(() => import("./Search/Search"));
export const SignInPage = React.lazy(() => import("./SignIn/SignIn"));
export const SignUpPage = React.lazy(() => import("./SignUp/SignUp"));
export const ForgotPasswordPage = React.lazy(
	() => import("./ForgotPassword/ForgotPassword")
);
