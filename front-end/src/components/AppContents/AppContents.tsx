import React from "react";
import Banner from "../Banner/Banner";
import "./Appcontents.scss";
type AppContentsProps = {};

const AppContents = (props: AppContentsProps) => {
	return (
		<div className="app-content">
			<Banner />
		</div>
	);
};

export default AppContents;
