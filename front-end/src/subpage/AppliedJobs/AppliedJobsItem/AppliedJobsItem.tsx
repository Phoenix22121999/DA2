import React from "react";
import "./AppliedJobsItem.scss";
import TEST_LOGO from "../../../assets/images/logo.png";

import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
} from "@ant-design/icons";
import { ButtonCommon, TagCommon } from "src/common";

export type AppliedJobsItemProps = {
	logo: string;
	major: string;
	title: string;
	company: string;
	description: string;
	time: string;
	address: string;
	salary: string;
};

const AppliedJobsItem = (props: AppliedJobsItemProps) => {
	return (
		<div className="applied-jobs-item">
			<div className="left">
				<div className="logo">
					<img src={TEST_LOGO} alt="" />
				</div>
			</div>
			<div className="right">
				<div className="top">
					<div className="top-left">
						<div className="title">Creative Art Designer</div>
						<div className="company">Premium Labels Limited</div>
					</div>
					<div className="top-right">
						<ButtonCommon size="small">Apply</ButtonCommon>
					</div>
				</div>
				<div className="content">
					<div className="major">
						<TagCommon
							color="orange"
							size="medium"
							icon={<BookOutlined />}
						>
							Marketing
						</TagCommon>
					</div>
					<div className="time">
						{" "}
						<TagCommon
							color="yellow"
							size="medium"
							icon={<ClockCircleOutlined />}
						>
							Full time
						</TagCommon>
					</div>
					<div className="address">
						<TagCommon
							color="red"
							size="medium"
							icon={<EnvironmentOutlined />}
						>
							Ha Noi
						</TagCommon>
					</div>
					<div className="salary">
						<TagCommon
							color="green"
							size="medium"
							icon={<DollarOutlined />}
						>
							15k - 25k
						</TagCommon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppliedJobsItem;
