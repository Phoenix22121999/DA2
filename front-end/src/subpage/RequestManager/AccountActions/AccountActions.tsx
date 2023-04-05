import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { ButtonCommon, TooltipCommon } from "src/common";
import { useReduxDispatch } from "src/redux/redux-hook";
import { UserAccountWithUserType } from "src/types/CombineType";
import { USER_TYPE } from "src/utils/contants";
import { reviewAccount } from "src/redux/slice/UserSilce";

type Props = {
	record: UserAccountWithUserType;
};

const AccountActions = ({ record }: Props) => {
	const dispatch = useReduxDispatch();

	const onViewClick = () => {
		dispatch(
			reviewAccount({
				payload: {
					user_id: Number(record.id),
					is_active: true,
				},
			})
		);
	};

	return (
		<div className="buttons-action">
			{Number(record.user_type_id) !== USER_TYPE.ADMIN && (
				<TooltipCommon title="Approve">
					<ButtonCommon
						size="small"
						icon={<PlusOutlined />}
						type="info"
						onClick={onViewClick}
					/>
				</TooltipCommon>
			)}
		</div>
	);
};

export default AccountActions;
