import React, { useEffect, useState } from "react";
import { CollapseCommon, PanelCommon } from "src/common";
import { AllApplicantPage, JobManagerPage } from "src/subpage";
import { useReduxDispatch } from "../../../redux/redux-hook";
import { RecruitmentPost } from "src/types/Type";
import { CallbackFunction } from "src/types/UtilType";
import { BaseReponseType } from "src/types/ApiType";
import { getRecruiterApplyHistoryById } from "src/redux/slice/ApplyHistorySlide";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { getListPostByUserById } from "src/redux/slice/PostSlide";

type Props = {
	useId: number;
};

const AccountDataRecruiter = ({ useId }: Props) => {
	const [postList, setPostList] = useState<RecruitmentPost[]>([]);
	const [aAList, setAaList] = useState<DetailHistoryApplyJob[]>([]);
	const dispatch = useReduxDispatch();
	const callbackPost: CallbackFunction<BaseReponseType<RecruitmentPost[]>> = (
		isSuccess,
		rs
	) => {
		if (isSuccess) {
			setPostList(rs!.data!);
		}
	};
	const callbackAH: CallbackFunction<
		BaseReponseType<DetailHistoryApplyJob[]>
	> = (isSuccess, rs) => {
		if (isSuccess) {
			setAaList(rs!.data!);
		}
	};
	useEffect(() => {
		dispatch(
			getListPostByUserById({ payload: useId, callback: callbackPost })
		);
		dispatch(
			getRecruiterApplyHistoryById({
				payload: useId,
				callback: callbackAH,
			})
		);
	}, [useId, dispatch]);

	return (
		<React.Suspense fallback={<SuspenseLoading size="medium" />}>
			<CollapseCommon>
				<PanelCommon key={"Post"} header="Post">
					<div className="account-cv">
						<JobManagerPage
							isUseCustomData
							customData={postList}
							isHideAdd
							isHideTitle
							isHideAction
						/>
					</div>
				</PanelCommon>
				<PanelCommon key={"AA"} header="All Applicant">
					<div className="account-cv">
						<AllApplicantPage
							isUseCustomData
							customData={aAList}
							isHideTitle
							isHideAction
						/>
					</div>
				</PanelCommon>
			</CollapseCommon>
		</React.Suspense>
	);
};

export default AccountDataRecruiter;
