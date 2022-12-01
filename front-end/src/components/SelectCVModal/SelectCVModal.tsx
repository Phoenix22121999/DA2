import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonCommon, SelectCommon } from "src/common";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import { useReduxDispatch } from "src/redux/redux-hook";
import { applyCV } from "src/redux/slice/ApplySlide";
import { ROUTE, USER_TYPE } from "src/utils/contants";
import useGetCVList from "./../../hooks/useGetCVList";
import "./SelectCVModal.scss";
import { CallbackFunction } from "src/types/UtilType";
import { message } from "antd";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
type Props = {
	postId?: number;
	onClose: () => void;
};

const SelectCVModal = ({ postId, onClose }: Props) => {
	const { cvsOption } = useGetCVList();
	const isCandidate = useCheckUserAuth(USER_TYPE.CANDIDATE);
	const [cv, setCv] = useState<string>();
	const navigate = useNavigate();

	const dispatch = useReduxDispatch();

	const onAddCV = () => {
		navigate(ROUTE.CADIDATE_CV_MANAGER);
	};

	const onSignIn = () => {
		navigate(ROUTE.SIGN_IN);
	};

	const onSignUp = () => {
		navigate(ROUTE.SIGN_UP);
	};

	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Apply success");
		} else {
			message.error("Apply success");
		}
		onClose();
	};

	const onApply = () => {
		if (postId && cv) {
			dispatch(
				applyCV({
					payload: { post_id: postId, cv_id: Number(cv) },
					callback,
				})
			);
		}
	};
	return (
		<div className="select-cv-modal">
			<React.Suspense fallback={<SuspenseLoading size="xsmall" />}>
				{!isCandidate && (
					<div className="select-cv-noti select-cv-not-candidate">
						Please sign in with candidate account
						<div className="button-group">
							<ButtonCommon size="small" onClick={onSignIn}>
								Sign in
							</ButtonCommon>{" "}
							<ButtonCommon size="small" onClick={onSignUp}>
								Sign up
							</ButtonCommon>
						</div>
					</div>
				)}

				{isCandidate && cvsOption.length < 1 && (
					<div className="select-cv-noti select-cv-not-have-cv">
						You don't have any CV. Please add one!
						<div className="button-group">
							<ButtonCommon size="small" onClick={onAddCV}>
								Go to CV manager
							</ButtonCommon>{" "}
						</div>
					</div>
				)}

				{isCandidate && cvsOption.length > 0 ? (
					<div className="select-cv-content">
						<div className="select-cv-title">Choose CV:</div>
						<SelectCommon
							data={cvsOption}
							placeholder="Please choose cv"
							value={cv}
							onChange={setCv}
						/>
						<div className="button-group">
							<ButtonCommon
								size="small"
								onClick={onAddCV}
								type="secondary"
							>
								Go to CV manager
							</ButtonCommon>{" "}
							<ButtonCommon size="small" onClick={onApply}>
								Apply
							</ButtonCommon>
						</div>
					</div>
				) : null}
			</React.Suspense>
		</div>
	);
};

export default SelectCVModal;
