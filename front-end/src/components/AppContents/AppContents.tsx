import React from "react";
import Banner from "../Banner/Banner";
import "./Appcontents.scss";
import { Features } from "./../Features/Features";
import PopularPost from "../PopularPost/PopularPost";
import HomeCategories from "../HomeCategories/HomeCategories";
import Recruitment from "../Recruitment/Recruitment";
type AppContentsProps = {};

const AppContents = (props: AppContentsProps) => {
	return (
		<div className="app-content">
			<Banner />
			{/* <PopularPost /> */}
			<Features />
			<HomeCategories />
			<Recruitment />
		</div>
	);
};

export default AppContents;
