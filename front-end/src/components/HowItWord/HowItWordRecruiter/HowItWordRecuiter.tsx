import React from "react";
import HowItWordItem, {
	HowItWordItemProps,
} from "../HowItWordItem/HowItWordItem";
import "./HowItWordRecuiter.scss";
import {
	UserAddOutlined,
	FileSearchOutlined,
	SolutionOutlined,
} from "@ant-design/icons";
type Props = {};
const RecuiterItem: HowItWordItemProps[] = [
	{
		number: 1,
		icon: <UserAddOutlined />,
		title: "Create Account",
		content: "Create your account and provide basic information",
	},
	{
		number: 2,
		icon: <FileSearchOutlined />,
		title: "Post Job",
		content: "Create and publish job postings",
	},
	{
		number: 3,
		icon: <SolutionOutlined />,
		title: "Wait For Resume",
		content: "Waiting for candidates to apply",
	},
];

const HowItWordRecuiter = (props: Props) => {
	return (
		<div className="how-it-word-recuiter">
			{RecuiterItem.map((item) => {
				return <HowItWordItem key={item.title} {...item} />;
			})}
		</div>
	);
};

export default HowItWordRecuiter;
