import React from "react";
import "./HomeCategoriesItem.scss";
export type HomeCategoriesItemProps = {
	icon: React.ReactNode;
	name: string;
};

const HomeCategoriesItem = ({ icon, name }: HomeCategoriesItemProps) => {
	return (
		<div className="home-categories-item">
			<div className="home-categories-inner">
				<div className="home-categories-icon">{icon}</div>
				<div className="home-categories-name">{name}</div>
			</div>
		</div>
	);
};

export default HomeCategoriesItem;
