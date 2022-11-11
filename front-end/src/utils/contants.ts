import { SelectOptionValue } from "src/components/SelectCommon/SelectCommon";

export const API_URL = "http://localhost:4000/api/";
export const METHOD_AXIOS = {
	GET: "get",
	POST: "post",
	PUT: "put",
	DELETE: "delete",
} as const;

type METHOD_AXIOS_KEY = keyof typeof METHOD_AXIOS;
export type METHOD_AXIOS_ITEMS = typeof METHOD_AXIOS[METHOD_AXIOS_KEY];

export const CONTENT_TYPE = {
	MULTIPART_FORM_DATA: "multipart/form-data",
	FORM_URLENCODED: "application/x-www-form-urlencoded",
} as const;

type CONTENT_TYPE_KEY = keyof typeof CONTENT_TYPE;
export type CONTENT_TYPE_ITEMS = typeof CONTENT_TYPE[CONTENT_TYPE_KEY];

export const ROUTE = {
	HOME: "/",
	SEARCH: "/search/",
	POST_DETAIL: "/post-detail/",
	CADIDATE: "/cadidate/",
	CADIDATE_PROFILE: "/cadidate/profile",
	CADIDATE_CV_MANAGER: "/cadidate/cv-manager",
	CADIDATE_APPLIED_JOBS: "/cadidate/applied-jobs",
	CADIDATE_CHANGE_PASSWORD: "/cadidate/change-password",
	RECRUITER: "/recruiter/",
	RECRUITER_PROFILE: "/recruiter/profile",
	RECRUITER_JOB_MANAGER: "/recruiter/job-manager",
	RECRUITER_ALL_APPLICANTS: "/recruiter/all-applicants",
	RECRUITER_CHANGE_PASSWORD: "/recruiter/change-password",
	RECRUITER_POST_NEW_JOB: "/recruiter/post-new-job",
} as const;

type ROUTE_KEY = keyof typeof ROUTE;
export type ROUTE_ITEMS = typeof ROUTE[ROUTE_KEY];

export const GGMAP_API_KEY = "AIzaSyDb0Fl2qgtLb38R85bK6k59qwtt5YOj4Z0";

export const GENDER_OPTION: SelectOptionValue[] = [
	{
		key: "male",
		value: "Male",
	},
	{
		key: "female",
		value: "Female",
	},
	{
		key: "other",
		value: "Other",
	},
];
