import { PaginationParameters } from "./UtilType";

export type CreateMajorParameters = {
	majors_name: string;
};

export interface UpdateMajorParameters {
	majors_id: number;
	majors_name: string;
}

export type DeleteMajorParameters = {
	majors_id: number;
};

export interface GetMajorListParameters extends PaginationParameters {}
