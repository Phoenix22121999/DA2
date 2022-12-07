import { SelectOptionValue } from "src/common/SelectCommon/SelectCommon";
// export const API_URL = "http://159.223.54.199:4000/api"
export const API_URL =
	process.env.NODE_ENV === "production"
		? "http://159.223.54.199:4000/api"
		: "http://localhost:4000/api";
// export const CDN_URL = "http://159.223.54.199:3002";
export const CDN_URL =
	process.env.NODE_ENV === "production"
		? "http://159.223.54.199:3002"
		: "http://localhost:3002";
export const GGAPI_TDTU = process.env.REACT_APP_GGAPI_TDT || "";
export const GGAPI_NORMAL = process.env.REACT_APP_GGAPI_NORMAL || "";
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
	SIGN_UP: "/sign-up/",
	SIGN_IN: "/sign-in/",
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
	RECRUITER_POST_NEW_JOB: "/recruiter/job-manager/post-new-job",
	RECRUITER_EDIT_JOB: "/recruiter/job-manager/edit-job",
	ADMIN: "/admin/",
	ADMIN_ACCOUNT_TYPE: "/admin/account-type",
	ADMIN_JOB_TYPE: "/admin/job-type",
	ADMIN_MAJOR: "/admin/major",
} as const;

type ROUTE_KEY = keyof typeof ROUTE;
export type ROUTE_ITEMS = typeof ROUTE[ROUTE_KEY];

export const GGMAP_API_KEY = "AIzaSyDb0Fl2qgtLb38R85bK6k59qwtt5YOj4Z0";

export const GENDER_OPTION: SelectOptionValue[] = [
	{
		key: 1,
		value: "Male",
	},
	{
		key: 2,
		value: "Female",
	},
	{
		key: 3,
		value: "Both",
	},
	{
		key: 4,
		value: "Other",
	},
];
export const USER_TYPE_OPTION: SelectOptionValue[] = [
	// {
	// 	key: 1,
	// 	value: "Admin",
	// },
	{
		key: 2,
		value: "Candidate",
	},
	{
		key: 3,
		value: "Recruiter",
	},
];

export const USER_TYPE = {
	ADMIN: 1,
	CANDIDATE: 2,
	RECRUITER: 3,
} as const;

type USER_TYPE_KEY = keyof typeof USER_TYPE;
export type USER_TYPE_ITEMS = typeof USER_TYPE[USER_TYPE_KEY];

export const SORT_TYPE = {
	create_date: "create_date",
} as const;

type SORT_TYPE_KEY = keyof typeof SORT_TYPE;
export type SORT_TYPE_ITEMS = typeof SORT_TYPE[SORT_TYPE_KEY];

export const SORT_ORDER = {
	asc: "asc",
	desc: "desc",
} as const;

type SORT_ORDER_KEY = keyof typeof SORT_ORDER;
export type SORT_ORDER_ITEMS = typeof SORT_ORDER[SORT_ORDER_KEY];

export type SORT_OPTION_TYPE = `${SORT_TYPE_ITEMS}-${SORT_ORDER_ITEMS}`;

export const COOKIES_NAME = {
	ACCESS_TOKEN: "accessToken",
	USER: "user",
} as const;

type COOKIES_NAME_KEY = keyof typeof COOKIES_NAME;
export type COOKIES_NAME_ITEMS = typeof COOKIES_NAME[COOKIES_NAME_KEY];

export const quillModules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ align: [] }],
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		[{ script: "sub" }, { script: "super" }],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
		["clean"],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		// matchVisual: false,
	},
};
