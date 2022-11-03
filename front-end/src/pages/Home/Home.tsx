import React from "react";
import Banner from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import FeaturesJob from "../../components/FeaturesJob/FeaturesJob";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HowItWord from "../../components/HowItWord/HowItWord";
import Recruitment from "../../components/Recruitment/Recruitment";

type Props = {};

const Home = (props: Props) => {
	return (
		<div>
			<Banner />
			{/* <PopularPost /> */}
			<Features />
			<HomeCategories />
			<Recruitment />
			<FeaturesJob />
			<HowItWord />
		</div>
	);
};

export default Home;
