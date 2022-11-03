import React from "react";
import "./Appcontents.scss";
type AppContentsProps = {
	children: React.ReactNode;
};

const AppContents = ({ children }: AppContentsProps) => {
	return <div className="app-content">{children}</div>;
};

export default AppContents;
