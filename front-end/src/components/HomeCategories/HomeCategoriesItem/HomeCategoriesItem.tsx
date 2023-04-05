import React from "react";
import { useNavigate } from "react-router-dom";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	searchPost,
	updateSearchParameter,
} from "src/redux/slice/SearchPostSlide";
import { CallbackFunction } from "src/types/UtilType";
import "./HomeCategoriesItem.scss";
export type HomeCategoriesItemProps = {
	icon?: React.ReactNode;
	name: string;
	itemKey: string;
};

const HomeCategoriesItem = ({
	icon,
	name,
	itemKey,
}: HomeCategoriesItemProps) => {
	const dispatch = useReduxDispatch();
	const navidate = useNavigate();
	const callback: CallbackFunction = (isSuuess) => {
		if (isSuuess) {
			navidate("/search");
		}
	};
	const onClick = () => {
		dispatch(updateSearchParameter({ list_major: [itemKey] }));

		dispatch(searchPost({ callback }));
	};

	return (
		<div className="home-categories-item" onClick={onClick}>
			<div className="home-categories-inner">
				{icon && <div className="home-categories-icon">{icon}</div>}
				<div className="home-categories-name">{name}</div>
			</div>
		</div>
	);
};

export default HomeCategoriesItem;
