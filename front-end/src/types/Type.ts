/**
 * Model User_Type
 *
 */
export type UserType = {
	id: number;
	user_type_name: string;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date | null;
	create_user: string | null;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
};

/**
 * Model User_Account
 *
 */
export type UserAccount = {
	id: number;
	password: string;
	username: string;
	google_id: number | null;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date;
	user_type_id: number;
	first_name: string | null;
	last_name: string | null;
	full_name: string | null;
	email: string | null;
	number_phone: string | null;
	age: number | null;
	gender: number | null;
	address: string | null;
	city_id: number | null;
	district_id: number | null;
	ward_id: number | null;
	avartar: string | null;
	logo: string | null;
};

/**
 * Model Job_Type
 *
 */
export type JobType = {
	id: number;
	job_type_name: string;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date;
	create_user: string;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
};

/**
 * Model Majors
 *
 */
export type Majors = {
	id: number;
	majors_name: string;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date;
	create_user: string;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
};

/**
 * Model Job
 *
 */
export type Job = {
	job_id: number;
	job_name: string;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date;
	create_user: string;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
};

/**
 * Model Apply_Profile
 *
 */
export type ApplyProfile = {
	profile_id: number;
	profile_name: string;
	profile_link: string | null;
	is_active: boolean;
	is_delete: boolean;
	create_date: Date;
	create_user: string;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
	user_id: number;
};

/**
 * Model Recruitment_Post
 *
 */
/**
 * Model Recruitment_Post
 *
 */
export type RecruitmentPost = {
	id: number;
	content: string;
	title: string;
	recuiter_id: number;
	to_value: number;
	from_value: number | null;
	gender: number | null;
	create_date: Date | null;
	create_user: string | null;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
	is_delete: boolean;
	is_active: boolean;
};

/**
 * Model History_Apply_Job
 *
 */
export type HistoryApplyJob = {
	id: number;
	user_id: number;
	post_id: number;
	profile_id: number;
	create_date: Date;
	create_user: string;
	update_date: Date | null;
	update_user: string;
	delete_date: Date | null;
	delete_user: string | null;
	is_delete: boolean;
	is_active: boolean;
};

/**
 * Model Recruitment_Post_Job_Type
 *
 */
export type RecruitmentPostJobType = {
	id: number;
	post_id: number;
	job_type_id: number;
	create_date: Date | null;
	create_user: string | null;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
	is_delete: boolean;
	is_active: boolean;
};

/**
 * Model Recruitment_Post_Majors
 *
 */
export type RecruitmentPostMajors = {
	id: number;
	post_id: number;
	majors_id: number;
	create_date: Date | null;
	create_user: string | null;
	update_date: Date | null;
	update_user: string | null;
	delete_date: Date | null;
	delete_user: string | null;
	is_delete: boolean;
	is_active: boolean;
};

/**
 * Model Recruitment_Post_Image
 *
 */
export type RecruitmentPostImage = {
	id: number;
	post_id: number | null;
	user_id: number | null;
	url_image: string | null;
	is_active: boolean | null;
	is_delete: boolean;
};

/**
 * Model cv
 *
 */
export type CV = {
	id: number;
	file_name_hash: string;
	file_name: string;
	user_id: number;
	extname: string | null;
	create_date: Date;
	create_user: string | null;
	is_active: boolean;
	is_delete: boolean;
};

/**
 * Model administrative_regions
 *
 */
export type AdministrativeRegions = {
	id: number;
	name: string;
	name_en: string;
	code_name_en: string | null;
	code_name: string | null;
};

/**
 * Model administrative_units
 *
 */
export type AdministrativeUnits = {
	id: number;
	full_name: string | null;
	full_name_en: string | null;
	short_name: string;
	short_name_en: string | null;
	code_name: string;
	code_name_en: string | null;
};

/**
 * Model provinces
 *
 */
export type Provinces = {
	id: number;
	code: string;
	name: string;
	name_en: string | null;
	full_name: string;
	full_name_en: string | null;
	code_name: string | null;
	administrative_unit_id: number | null;
	adminstrative_region_id: number | null;
};

/**
 * Model districts
 *
 */
export type Districts = {
	id: number;
	code: string;
	name: string;
	name_en: string | null;
	full_name: string | null;
	full_name_en: string | null;
	code_name: string | null;
	administrative_unit_id: number;
	province_code: string;
};

/**
 * Model wards
 *
 */
export type Wards = {
	id: number;
	code: string;
	name: string;
	name_en: string | null;
	full_name: string;
	full_name_en: string | null;
	code_name: string | null;
	district_code: string;
	administrative_unit_id: number;
};
