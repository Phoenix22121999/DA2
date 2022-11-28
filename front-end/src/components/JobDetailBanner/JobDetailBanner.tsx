import React from "react";
import "./JobDetailBanner.scss";
import TEST_LOGO from "../../assets/images/logo.png";
import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
} from "@ant-design/icons";
import { ButtonCommon, TagCommon } from "src/common";
type Props = {};

const JobDetailBanner = (props: Props) => {
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
									<div className="title">
										Creative Art Designer
									</div>
									<div className="company">
										Premium Labels Limited
									</div>
								</div>
								<div className="top-right">
									<ButtonCommon size="medium">
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
		</div>
	);
};

export default JobDetailBanner;
