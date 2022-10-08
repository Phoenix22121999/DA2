import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Banner.scss";
type BannerProps = {};

export default function Banner({}: BannerProps) {
	return (
		<section className="banner container">
			<div className="title">1500+ Jobs posted last week</div>
			<SearchBar />
		</section>
	);
}
