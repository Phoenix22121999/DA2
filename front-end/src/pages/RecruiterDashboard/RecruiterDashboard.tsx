import { Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import RecruiterDashboardSidebar from "src/components/RecruiterDashboardSidebar/RecruiterDashboardSidebar";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import "./RecruiterDashboard.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import LoadingCommon from "src/common/LoadingCommon/LoadingCommon";
type Props = {};
const { Sider, Content } = Layout;

const RecruiterDashboard = (props: Props) => {
	const navigate = useNavigate();

	const isAuth = useCheckUserAuth(3);
	useEffect(() => {
		if (!isAuth) {
			navigate("/");
		}
	}, [isAuth, navigate]);
	const [collapsed, setCollapsed] = useState(false);
	const [isDrawer, setIsDrawer] = useState(false);
	let location = useLocation();
	const toggleSider = () => {
		setCollapsed(!collapsed);
	};
	const onClose = () => {
		setCollapsed(true);
	};
	const onBreakpoint = (broken: boolean) => {
		if (broken) {
			setCollapsed(true);
			setIsDrawer(true);
		} else {
			setCollapsed(false);
			setIsDrawer(false);
		}
	};
	useEffect(() => {
		if (isDrawer) {
			onClose();
		}
	}, [location, isDrawer]);
	return (
		<div className="recruiter-dashboard">
			<div className="container">
				<div className="recruiter-dashboard-inner">
					<Layout className="dashboard-layout">
						<Drawer
							className="dashboard-drawer"
							placement="left"
							onClose={onClose}
							open={isDrawer ? !collapsed : false}
							key="left"
							getContainer={false}
						>
							<div className="recruiter-dashboard-sidebar dashboard-sidebar-common">
								<RecruiterDashboardSidebar />
							</div>
						</Drawer>
						<Sider
							breakpoint="md"
							collapsedWidth={isDrawer ? 0 : 80}
							collapsed={isDrawer ? true : collapsed}
							onBreakpoint={onBreakpoint}
							collapsible
							trigger={null}
							className="dashboard-sider"
						>
							<div className="recruiter-dashboard-sidebar dashboard-sidebar-common">
								<RecruiterDashboardSidebar
									collapsed={collapsed}
								/>
							</div>
						</Sider>
						<Content>
							<div className="sidebar-toggle">
								<div
									className="sidebar-toggle-icon"
									onClick={toggleSider}
								>
									{collapsed ? (
										<MenuUnfoldOutlined />
									) : (
										<MenuFoldOutlined />
									)}
								</div>
							</div>
							<div className="recruiter-dashboard-content dashboard-content-common">
								<React.Suspense
									fallback={
										<div className="loading-page">
											<LoadingCommon loading />
										</div>
									}
								>
									{" "}
									<Outlet />
								</React.Suspense>
							</div>
						</Content>
					</Layout>
				</div>
			</div>
		</div>
	);
};

export default RecruiterDashboard;
