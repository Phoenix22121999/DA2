import React from "react";
import "./HomeCategories.scss";
import HomeCategoriesItem, {
	HomeCategoriesItemProps,
} from "./HomeCategoriesItem/HomeCategoriesItem";
import { FormatPainterOutlined } from "@ant-design/icons";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import { Link } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
type Props = {};

const TOP_CATEGORIES: HomeCategoriesItemProps[] = [
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 1",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 2",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 3",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 4",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 5",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 6",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 7",
	},
	{
		icon: <FormatPainterOutlined />,
		name: "Design & Create 8",
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
					<ButtonCommon ghost size="large" type="outstanding">
						<Link to={ROUTE.SEARCH}>All Categories</Link>
					</ButtonCommon>
				</div>
			</div>
		</section>
	);
};

export default HomeCategories;
