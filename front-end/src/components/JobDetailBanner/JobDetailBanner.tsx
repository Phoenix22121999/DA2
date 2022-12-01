import React from "react";
import "./JobDetailBanner.scss";
import TEST_LOGO from "../../assets/images/logo.png";
import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
} from "@ant-design/icons";
import { ButtonCommon, ModalCommon, TagCommon } from "src/common";
import { DetailRecruitmentPost } from "src/types/CombineType";
import SelectCVModal from "../SelectCVModal/SelectCVModal";
import { useModal } from "src/hooks/useModal";
interface Props extends Partial<DetailRecruitmentPost> {}

const JobDetailBanner = ({ title, user, id }: Props) => {
	const { open, isOpen, close } = useModal(false);
	const onApply = () => {
		open();
	};
	return (
		<div className="job-detail-banner-warpper">
			<div className="job-detail-banner-inner">
				<div className="container">
					<div className="banner-item">
						<div className="left">
							<div className="logo">
								<img src={TEST_LOGO} alt="" />
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
									>
										Apply
									</ButtonCommon>
								</div>
							</div>
							<div className="content">
								<div className="major">
									<TagCommon
										color="orange"
										size="large"
										icon={<BookOutlined />}
									>
										Marketing
									</TagCommon>
								</div>
								<div className="time">
									{" "}
									<TagCommon
										color="yellow"
										size="large"
										icon={<ClockCircleOutlined />}
									>
										Full time
									</TagCommon>
								</div>
								<div className="address">
									<TagCommon
										color="red"
										size="large"
										icon={<EnvironmentOutlined />}
									>
										Ha Noi
									</TagCommon>
								</div>
								<div className="salary">
									<TagCommon
										color="green"
										size="large"
										icon={<DollarOutlined />}
									>
										15k - 25k
									</TagCommon>
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
