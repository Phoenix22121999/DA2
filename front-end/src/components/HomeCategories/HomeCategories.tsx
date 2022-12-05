import React, { useMemo } from "react";
import "./HomeCategories.scss";
import HomeCategoriesItem, {
	HomeCategoriesItemProps,
} from "./HomeCategoriesItem/HomeCategoriesItem";
import { FormatPainterOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { ButtonCommon } from "src/common";
import useGetStatictisOption from "src/hooks/useGetStatictisOption";
type Props = {};

const HomeCategories = (props: Props) => {
	const { majorList } = useGetStatictisOption();
	const topMajor: HomeCategoriesItemProps[] = useMemo(() => {
		return majorList.map((i) => {
			return {
				icon: <FormatPainterOutlined />,
				name: i.majors_name,
				itemKey: i.id.toString(),
			};
		});
	}, [majorList]);
	return (
		<section className="home-categories">
			<div className="container">
				<div className="categories-title">Top Major</div>
				<div className="box">
					{topMajor.map((item) => {
						return (
							<HomeCategoriesItem key={item.itemKey} {...item} />
						);
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
