import React from "react";
import { Outlet } from "react-router-dom";
import CandidateDashboardSidebar from "src/components/CandidateDashboardSidebar/CandidateDashboardSidebar";
import "./CandidateDashboard.scss";
type Props = {};

export const CandidateDashboard = (props: Props) => {
	return (
		<div className="candidate-dashboard">
			<div className="container">
				<div className="candidate-dashboard-inner">
					<div className="candidate-dashboard-sidebar">
						<CandidateDashboardSidebar />
					</div>
					<div className="candidate-dashboard-content">
						{" "}
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
};
