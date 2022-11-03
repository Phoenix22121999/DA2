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
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
	},
	{
		number: 2,
		icon: <FileSearchOutlined />,
		title: "Post Job",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
	},
	{
		number: 3,
		icon: <SolutionOutlined />,
		title: "Wait For Resume",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil dolores. Dicta?",
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
