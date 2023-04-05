import React, { useMemo } from "react";
import "./JobDetailBanner.scss";
import TEST_LOGO from "../../assets/images/logo.png";

import { ButtonCommon, ModalCommon } from "src/common";
import { DetailRecruitmentPost } from "src/types/CombineType";
import SelectCVModal from "../SelectCVModal/SelectCVModal";
import { useModal } from "src/hooks/useModal";
import useCheckIsApplied from "./../../hooks/useCheckIsApplied";
import { CDN_URL } from "src/utils/contants";
interface Props extends Partial<DetailRecruitmentPost> {}

const JobDetailBanner = ({ title, user, id }: Props) => {
	const isApplied = useCheckIsApplied(id!);

	const { open, isOpen, close } = useModal(false);
	const onApply = () => {
		open();
	};
	const avatarMemo = useMemo(() => {
		if (!user?.avartar) {
			return TEST_LOGO;
		}
		if (user?.avartar.includes("https")) {
			return user?.avartar;
		}
		return `${CDN_URL}/${user?.avartar}`;
	}, [user]);
	return (
		<div className="job-detail-banner-warpper">
			<div className="job-detail-banner-inner">
				<div className="container">
					<div className="banner-item">
						<div className="left">
							<div className="logo">
								<img
									src={avatarMemo ? avatarMemo : TEST_LOGO}
									alt=""
								/>
							</div>
						</div>
						<div className="right">
							<div className="top">
								<div className="top-left">
									<div className="title">{title}</div>
									<div className="company">
										{user?.full_name}
									</div>
								</div>
								<div className="top-right">
									<ButtonCommon
										size="large"
										onClick={onApply}
										disabled={isApplied}
									>
										{isApplied ? "Applied" : "Apply"}
									</ButtonCommon>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ModalCommon open={isOpen} onCancel={close} footer={null} centered>
				<SelectCVModal postId={id} onClose={close} />
			</ModalCommon>
		</div>
	);
};

export default JobDetailBanner;
