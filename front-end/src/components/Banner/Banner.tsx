import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Banner.scss";
type BannerProps = {};

export default function Banner(props: BannerProps) {
	return (
		<section className="banner">
			<div className="container">
				<div className="title">
					Find your <span className="primary-text">dream </span>job
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
