import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getAccountDetail,
	selectAccountDetailID,
} from "src/redux/slice/AccountSilce";
import { BaseReponseType } from "src/types/ApiType";
import { DetailUserAccount } from "src/types/CombineType";
import { CallbackFunction } from "src/types/UtilType";
import { GENDER, GENDER_KEY, ROUTE } from "src/utils/contants";
import AccountDatailItem from "./AccountDatailItem/AccountDatailItem";
import { USER_TYPE } from "./../../utils/contants";
import "./AccountDetail.scss";
import AccountDataCandidate from "./AccountDataCandidate/AccountDataCandidate";
import AccountDataRecruiter from "./AccountDataRecruiter/AccountDataRecruiter";
import UserEducation from "src/components/UserEducation/UserEducation";
import UserExperience from "src/components/UserExperience/UserExperience";
import UserProject from "src/components/UserProject/UserProject";
import UserAchievement from "src/components/UserAchievement/UserAchievement";
type Props = {};

const AccountDetail = (props: Props) => {
	const id = useReduxSelector(selectAccountDetailID);
	const [account, setAccount] = useState<DetailUserAccount>();
	const navigate = useNavigate();
	const dispatch = useReduxDispatch();

	const callback: CallbackFunction<BaseReponseType<DetailUserAccount>> = (
		isSuccess,
		rs
	) => {
		if (isSuccess) {
			setAccount(rs?.data);
		}
	};

	useEffect(() => {
		if (id === 0) {
			navigate(ROUTE.HOME);
		} else {
			dispatch(getAccountDetail({ payload: id, callback }));
		}
	}, [id, navigate, dispatch]);

	if (id && account) {
		return (
			<div className="container">
				<div className="account-warpper">
					<div className="account-title">Infomation</div>
					<div className="account-info">
						<div className="account-info-detail">
							<AccountDatailItem title="Id" value={account.id} />
							<AccountDatailItem
								title="Username"
								value={account.username}
							/>
							<AccountDatailItem
								title="Age"
								value={account.age || ""}
							/>
							<AccountDatailItem
								title="First Name"
								value={account.first_name || ""}
							/>
							<AccountDatailItem
								title="Last Name"
								value={account.last_name || ""}
							/>
							<AccountDatailItem
								title="Email"
								value={account.email || ""}
							/>
							<AccountDatailItem
								title="Gender"
								value={
									account.gender
										? GENDER[account.gender as GENDER_KEY]
										: ""
								}
							/>
							<AccountDatailItem
								title="Numberphone"
								value={account.number_phone || ""}
							/>
							<AccountDatailItem
								title="Province"
								value={
									account.provinces
										? account.provinces.full_name
										: ""
								}
							/>
							<AccountDatailItem
								title="District"
								value={
									account.districts &&
									account.districts.full_name
										? account.districts.full_name
										: ""
								}
							/>
							<AccountDatailItem
								title="Ward"
								value={
									account.wards ? account.wards.full_name : ""
								}
							/>
						</div>
						{account.avartar && (
							<div className="account-info-avatar">
								<img src={account.avartar} alt="" />
							</div>
						)}
					</div>
					{Number(account.user_type_id) === USER_TYPE.CANDIDATE && (
						<div className="candidate-resume">
							<UserEducation isView />
							<UserExperience isView />
							<UserProject isView />
							<UserAchievement isView />
						</div>
					)}

					{!(Number(account.user_type_id) === USER_TYPE.ADMIN) && (
						<div className="account-title">Data</div>
					)}
					{Number(account.user_type_id) === USER_TYPE.CANDIDATE && (
						<AccountDataCandidate useId={account.id} />
					)}
					{Number(account.user_type_id) === USER_TYPE.RECRUITER && (
						<AccountDataRecruiter useId={account.id} />
					)}
				</div>
			</div>
		);
	}
	return null;
};

export default AccountDetail;
