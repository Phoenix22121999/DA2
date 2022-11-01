import React from "react";
import { Features } from "../Features/Features";
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
