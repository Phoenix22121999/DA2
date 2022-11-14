import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import CandidateDashboardSidebar from "src/components/CandidateDashboardSidebar/CandidateDashboardSidebar";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import "./CandidateDashboard.scss";
type Props = {};

export const CandidateDashboard = (props: Props) => {
	const navigate = useNavigate();

	const isAuth = useCheckUserAuth(2);
	useEffect(() => {
		console.log(isAuth);
		if (!isAuth) {
			navigate("/");
		}
	}, [isAuth, navigate]);

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
