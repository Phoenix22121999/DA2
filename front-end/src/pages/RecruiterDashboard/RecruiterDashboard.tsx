import React from "react";
import { Outlet } from "react-router-dom";
import RecruiterDashboardSidebar from "src/components/RecruiterDashboardSidebar/RecruiterDashboardSidebar";
import "./RecruiterDashboard.scss";
type Props = {};

export const RecruiterDashboard = (props: Props) => {
	return (
		<div className="recruiter-dashboard">
			<div className="container">
				<div className="recruiter-dashboard-inner">
					<div className="recruiter-dashboard-sidebar">
						<RecruiterDashboardSidebar />
					</div>
					<div className="recruiter-dashboard-content">
						{" "}
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
