import React, { useEffect, useState } from "react";
import { CollapseCommon, PanelCommon } from "src/common";
import { getListCVById } from "src/redux/slice/CVSlide";
import { AppliedJobsPage, CVManagerPage } from "src/subpage";
import { useReduxDispatch } from "./../../../redux/redux-hook";
import { CV } from "src/types/Type";
import { CallbackFunction } from "src/types/UtilType";
import { BaseReponseType } from "src/types/ApiType";
import { getCandidateApplyHistoryById } from "src/redux/slice/ApplyHistorySlide";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";

type Props = {
	useId: number;
};

const AccountDataCandidate = ({ useId }: Props) => {
	const [cvList, setCvList] = useState<CV[]>([]);
	const [ahList, setAhList] = useState<DetailHistoryApplyJob[]>([]);
	const dispatch = useReduxDispatch();
	const callbackCV: CallbackFunction<BaseReponseType<CV[]>> = (
		isSuccess,
		rs
	) => {
		if (isSuccess) {
			setCvList(rs!.data!);
		}
	};
	const callbackAH: CallbackFunction<
		BaseReponseType<DetailHistoryApplyJob[]>
	> = (isSuccess, rs) => {
		if (isSuccess) {
			setAhList(rs!.data!);
		}
	};
	useEffect(() => {
		dispatch(getListCVById({ payload: useId, callback: callbackCV }));
		dispatch(
			getCandidateApplyHistoryById({
				payload: useId,
				callback: callbackAH,
			})
		);
	}, [useId, dispatch]);

	return (
		<React.Suspense fallback={<SuspenseLoading size="medium" />}>
			<CollapseCommon>
				<PanelCommon key={"cv"} header="CV">
					<div className="account-cv">
						<CVManagerPage
							isUseCustomData
							customData={cvList}
							isHideAdd
							isHideTitle
							isHideAction
						/>
					</div>
				</PanelCommon>
				<PanelCommon key={"AJ"} header="Applied Jobs">
					<div className="account-cv">
						<AppliedJobsPage
							isUseCustomData
							customData={ahList}
							isHideTitle
							isHideAction
						/>
					</div>
				</PanelCommon>
			</CollapseCommon>
		</React.Suspense>
	);
};

export default AccountDataCandidate;
