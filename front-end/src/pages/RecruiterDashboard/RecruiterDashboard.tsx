import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import RecruiterDashboardSidebar from "src/components/RecruiterDashboardSidebar/RecruiterDashboardSidebar";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import "./RecruiterDashboard.scss";
type Props = {};

export const RecruiterDashboard = (props: Props) => {
	const navigate = useNavigate();

	const isAuth = useCheckUserAuth(3);
	useEffect(() => {
		if (!isAuth) {
			navigate("/");
		}
	}, [isAuth, navigate]);
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
