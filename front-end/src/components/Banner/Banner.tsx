import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Banner.scss";
type BannerProps = {};

export default function Banner(props: BannerProps) {
	return (
		<section className="banner">
			<div className="container">
				<div className="title">
					<span className="primary-text">1500+</span> Jobs posted last
					week
				</div>
				<div
					style={{
						width: "1rem",
						color: "yellow",
						height: "5px",
						zIndex: 10,
					}}
				></div>
				<div
					style={{
						width: "10px",
						color: "red",
						height: "5px",
						zIndex: 10,
					}}
				></div>
				<SearchBar />
				<div className="sub-title">
					<span className="primary-text">Search by tags:</span>{" "}
					Tecnology, Business, Consulting, IT Company, Design,
					Development
				</div>
			</div>
		</section>
	);
}
