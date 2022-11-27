export type CreateAccountTypeParameters = {
	user_type_name: string;
	is_active: boolean;
	is_delete: boolean;
};
export interface UpdateAccountTypeParameters {
	user_type_id: number;
	user_type_name: string;
	is_active?: boolean;
	is_delete?: boolean;
}

export type DeleteAccountTypeParameters = {
	user_type_id: number;
};
