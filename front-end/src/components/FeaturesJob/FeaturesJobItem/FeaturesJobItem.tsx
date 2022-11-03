import React from "react";
import "./FeaturesJobItem.scss";
import TEST_LOGO from "../../../assets/images/logo.png";
import ButtonCommon from "./../../ButtonCommon/ButtonCommon";
import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
} from "@ant-design/icons";
export type FeaturesJobItemProps = {
	logo: string;
	major: string;
	title: string;
	company: string;
	description: string;
	time: string;
	address: string;
	salary: string;
};

const FeaturesJobItem = (props: FeaturesJobItemProps) => {
	return (
		<div className="features-job-item">
			<div className="left">
				<div className="logo">
					<img src={TEST_LOGO} alt="" />
				</div>
				<div className="major">Marketing</div>
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
					<div className="description">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod temporinc ididunt ut dolore magna
						aliqua.
					</div>
					<div className="time">
						{" "}
						<span className="icon">
							<ClockCircleOutlined />
						</span>{" "}
						Full time
					</div>
					<div className="address">
						<span className="icon">
							<EnvironmentOutlined />
						</span>
						56/8, Panthapath Dhanmondi Dhaka
					</div>
					<div className="salary">
						<span className="icon">
							<DollarOutlined />
						</span>{" "}
						15k - 25k
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesJobItem;
