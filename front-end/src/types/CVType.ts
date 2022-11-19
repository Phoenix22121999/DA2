export type CreateCVParameters = {
	file_name_hash: string;
	file_name: string;
};
export type UpdateCVParameters = {
	id_cv: number;
	file_name_new: string;
};

export type DeleteCVParameters = {
	id_cv: number;
};
