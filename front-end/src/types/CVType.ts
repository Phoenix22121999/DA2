export type CreateCVParameters = {
	file_name_hash: string;
	file_name: string;
};
export type UpdateCVParameters = {
	cv_id: number;
	file_name_new: string;
};

export type DeleteCVParameters = {
	cv_id: number;
};

export type DownloadCVParameters = {
	cv_id: number;
	file_name: string;
	ext: string;
};
export type CreateCVFromProfileParameters = {
	name_cv: string;
};
