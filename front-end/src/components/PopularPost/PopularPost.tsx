import React from "react";
import CarouselCommon from "../CarouselCommon/CarouselCommon";

type Props = {};

const PopularPost = (props: Props) => {
	return (
		<section className="popular-post">
			<div style={{ height: "10rem" }}>
				<CarouselCommon />
			</div>
		</section>
	);
};

export default PopularPost;
