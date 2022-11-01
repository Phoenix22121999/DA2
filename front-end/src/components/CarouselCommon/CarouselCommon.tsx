import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type CarouselCommonProps = {
	children?: React.ReactNode;
};

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CarouselCommon = ({ children }: CarouselCommonProps) => {
	return (
		<Carousel
			swipeable={true}
			draggable={true}
			showDots={true}
			responsive={responsive}
			infinite={true}
			autoPlaySpeed={1000}
			keyBoardControl={true}
			removeArrowOnDeviceType={["tablet", "mobile"]}
			dotListClass="custom-dot-list-style"
			itemClass="carousel-item-padding-40-px"
		>
			<div style={{ height: "25rem", background: "red" }}>Item 1</div>
			<div style={{ height: "25rem", background: "yellow" }}>Item 2</div>
			<div style={{ height: "25rem", background: "blue" }}>Item 3</div>
			<div style={{ height: "25rem", background: "green" }}>Item 4</div>
		</Carousel>
	);
};

export default CarouselCommon;
