import React from "react";
import HowItWordItem, {
	HowItWordItemProps,
} from "../HowItWordItem/HowItWordItem";
import "./HowItWordCandidate.scss";
import {
	UserAddOutlined,
	FileSearchOutlined,
	SolutionOutlined,
} from "@ant-design/icons";
type Props = {};
const CamdidateItem: HowItWordItemProps[] = [
	{
		number: 1,
		icon: <UserAddOutlined />,
		title: "Create Account",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
	},
	{
		number: 2,
		icon: <FileSearchOutlined />,
		title: "Search Job",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
	},
	{
		number: 3,
		icon: <SolutionOutlined />,
		title: "Send Your Resume",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
	},
];

const HowItWordCamdidate = (props: Props) => {
	return (
		<div className="how-it-word-camdidate">
			{CamdidateItem.map((item) => {
				return <HowItWordItem key={item.title} {...item} />;
			})}
		</div>
	);
};

export default HowItWordCamdidate;
