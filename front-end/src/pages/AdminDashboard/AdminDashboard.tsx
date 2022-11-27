import { Drawer, Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";
import "./AdminDashboard.scss";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import AdminDashboardSidebar from "src/components/AdminDashboardSidebar/AdminDashboardSidebar";
type Props = {};
const { Sider, Content } = Layout;
export const AdminDashboard = (props: Props) => {
	const navigate = useNavigate();

	const isAuth = useCheckUserAuth(1);
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
		<div className="admin-dashboard">
			<div className="container">
				<div className="admin-dashboard-inner">
					<Layout className="dashboard-layout">
						<Drawer
							className="dashboard-drawer"
							placement="left"
							onClose={onClose}
							open={isDrawer ? !collapsed : false}
							key="left"
							getContainer={false}
						>
							<div className="admin-dashboard-sidebar dashboard-sidebar-common">
								<AdminDashboardSidebar />
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
							<div className="admin-dashboard-sidebar dashboard-sidebar-common">
								<AdminDashboardSidebar collapsed={collapsed} />
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
							<div className="admin-dashboard-content dashboard-content-common">
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
