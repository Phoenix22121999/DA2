import React from "react";
import "./HomeCategories.scss";
import HomeCategoriesItem, {
	HomeCategoriesItemProps,
} from "./HomeCategoriesItem/HomeCategoriesItem";
import { FormatPainterOutlined } from "@ant-design/icons";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
type Props = {};

const TOP_CATEGORIES: HomeCategoriesItemProps[] = [
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create",
	},
];
const HomeCategories = (props: Props) => {
	return (
		<section className="home-categories">
			<div className="container">
				<div className="categories-title">Top Categories</div>
				<div className="box">
					{TOP_CATEGORIES.map((item) => {
						return <HomeCategoriesItem key={item.name} {...item} />;
					})}
				</div>
				<div className="categories-button">
					<ButtonCommon ghost size="medium">
						All Categories
					</ButtonCommon>
				</div>
			</div>
		</section>
	);
};

export default HomeCategories;
