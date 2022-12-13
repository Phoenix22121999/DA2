import React from "react";

export const AccountTypeManagerPage = React.lazy(
	() => import("./AccountTypeManager/AccountTypeManager")
);

export const AllApplicantPage = React.lazy(
	() => import("./AllApplicant/AllApplicant")
);

export const AppliedJobsPage = React.lazy(
	() => import("./AppliedJobs/AppliedJobs")
);

export const CVManagerPage = React.lazy(() => import("./CVManager/CVManager"));

export const CandidateProfilePage = React.lazy(
	() => import("./CadidateProfile/CandidateProfile")
);

export const ChangePasswordPage = React.lazy(
	() => import("./ChangePassword/ChangePassword")
);

export const EditPostPage = React.lazy(() => import("./EditPost/EditPost"));

export const JobManagerPage = React.lazy(
	() => import("./JobManager/JobManager")
);

export const JobTypeManagerPage = React.lazy(
	() => import("./JobTypeManager/JobTypeManager")
);

export const MajorManagerPage = React.lazy(
	() => import("./MajorManager/MajorManager")
);

export const PostJobPage = React.lazy(() => import("./PostJob/PostJob"));

export const RecruiterProfilePage = React.lazy(
	() => import("./RecruiterProfile/RecruiterProfile")
);

export const AccountManagerPage = React.lazy(
	() => import("./AccountManager/AccountManager")
);

export const AccountDetailPage = React.lazy(
	() => import("./AccountDetail/AccountDetail")
);
