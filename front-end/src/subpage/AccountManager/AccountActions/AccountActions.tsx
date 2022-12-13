import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import { ButtonCommon, TooltipCommon } from "src/common";
import { useReduxDispatch } from "src/redux/redux-hook";
import { setAccountDetailData } from "src/redux/slice/AccountSilce";
import { UserAccountWithUserType } from "src/types/CombineType";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";

type Props = {
	record: UserAccountWithUserType;
};

const AccountActions = ({ record }: Props) => {
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();

	const onViewClick = () => {
		dispatch(setAccountDetailData(Number(record.id)));
		navigate(ROUTE.ADMIN_ACCOUNT_DETAIL);
	};
	return (
		<div className="buttons-action">
			<TooltipCommon title="View">
				<ButtonCommon
					size="small"
					icon={<EyeOutlined />}
					type="info"
					onClick={onViewClick}
				/>
			</TooltipCommon>
		</div>
	);
};

export default AccountActions;
