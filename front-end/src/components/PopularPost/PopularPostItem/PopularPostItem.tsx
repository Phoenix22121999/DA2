import React from "react";
import "./PopularPostItem.scss";
type Props = {};

const PopularPostItem = (props: Props) => {
	return (
		<div className="popular-post-item">
			<div className="logo"></div>
			<div className="content"></div>
			<div className="action"></div>
		</div>
	);
};

export default PopularPostItem;
