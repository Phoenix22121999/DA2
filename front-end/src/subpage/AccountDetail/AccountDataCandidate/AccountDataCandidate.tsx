import React, { useEffect, useState } from "react";
import { CollapseCommon, PanelCommon } from "src/common";
import { getListCVById } from "src/redux/slice/CVSlide";
import { AppliedJobsPage, CVManagerPage } from "src/subpage";
import { useReduxDispatch } from "./../../../redux/redux-hook";
import { CV } from "src/types/Type";
import { CallbackFunction } from "src/types/UtilType";
import { BaseReponseType } from "src/types/ApiType";
import { getCandidateApplyHistoryById } from "src/redux/slice/ApplyHistorySlide";
import {
	DetailHistoryApplyJob,
	DetailRecruitmentPostUserLike,
} from "src/types/CombineType";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { BookmarkManagerPage } from "./../../index";
import { getListBookmarkById } from "src/redux/slice/BookmarkSlide";

type Props = {
	useId: number;
};

const AccountDataCandidate = ({ useId }: Props) => {
	const [cvList, setCvList] = useState<CV[]>([]);
	const [ahList, setAhList] = useState<DetailHistoryApplyJob[]>([]);
	const [bmList, setBmList] = useState<DetailRecruitmentPostUserLike[]>([]);
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
	const callbackBM: CallbackFunction<
		BaseReponseType<DetailRecruitmentPostUserLike[]>
	> = (isSuccess, rs) => {
		if (isSuccess) {
			setBmList(rs!.data!);
		}
	};
	useEffect(() => {
		dispatch(getListCVById({ payload: useId, callback: callbackCV }));
		dispatch(
			getCandidateApplyHistoryById({
				payload: {
					user_id: useId,
					item_per_page: 99999,
				},
				callback: callbackAH,
			})
		);
		dispatch(
			getListBookmarkById({
				payload: {
					user_id: useId,
					item_per_page: 99999,
				},
				callback: callbackBM,
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
					<div className="applied-jobs">
						<AppliedJobsPage
							isUseCustomData
							customData={ahList}
							isHideTitle
							isHideAction
						/>
					</div>
				</PanelCommon>
				<PanelCommon key={"BP"} header="Bookmark Post">
					<div className="bookmark-post">
						<BookmarkManagerPage
							isUseCustomData
							customData={bmList}
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
