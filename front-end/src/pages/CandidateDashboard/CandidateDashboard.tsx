import { Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CandidateDashboardSidebar from "src/components/CandidateDashboardSidebar/CandidateDashboardSidebar";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import "./CandidateDashboard.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
type Props = {};
const { Sider, Content } = Layout;
export const CandidateDashboard = (props: Props) => {
	const navigate = useNavigate();

	const isAuth = useCheckUserAuth(2);
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
		<div className="candidate-dashboard">
			<div className="container">
				<div className="candidate-dashboard-inner">
					<Layout className="dashboard-layout">
						<Drawer
							className="dashboard-drawer"
							placement="left"
							onClose={onClose}
							open={isDrawer ? !collapsed : false}
							key="left"
							getContainer={false}
						>
							<div className="candidate-dashboard-sidebar dashboard-sidebar-common">
								<CandidateDashboardSidebar />
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
							<div className="candidate-dashboard-sidebar dashboard-sidebar-common">
								<CandidateDashboardSidebar
									collapsed={collapsed}
								/>
							</div>
						</Sider>
						<Content>
							<div
								className="sidebar-toggle"
								onClick={toggleSider}
							>
								{collapsed ? (
									<MenuUnfoldOutlined />
								) : (
									<MenuFoldOutlined />
								)}
							</div>
							<div className="candidate-dashboard-content dashboard-content-common">
								{" "}
								<Outlet />
							</div>
						</Content>
					</Layout>
				</div>
			</div>
		</div>
	);
};
