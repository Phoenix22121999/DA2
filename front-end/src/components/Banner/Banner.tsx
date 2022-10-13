import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Banner.scss";
type BannerProps = {};

export default function Banner({}: BannerProps) {
	return (
		<section className="banner">
			<div className="container">
				<div className="title">
					<span className="primary-text">1500+</span> Jobs posted last
					week
				</div>
				<SearchBar />
			</div>
		</section>
	);
}
