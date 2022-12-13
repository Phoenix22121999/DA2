import React from "react";
import DashboardSidebarItem, {
	DashboardSidebarItemProps,
} from "../DashboardSidebarItem/DashboardSidebarItem";
import "./AdminDashboardSidebar.scss";
import {
	UserOutlined,
	SnippetsOutlined,
	FieldTimeOutlined,
	BookOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
type Props = {
	collapsed?: boolean;
};
const ITEMS: DashboardSidebarItemProps[] = [
	{
		icon: <UserOutlined />,
		title: "Account Manager",
		path: ROUTE.ADMIN_ACCOUNT,
	},
	{
		icon: <SnippetsOutlined />,
		title: "User Type",
		path: ROUTE.ADMIN_ACCOUNT_TYPE,
	},
	{
		icon: <FieldTimeOutlined />,
		title: "Job Type",
		path: ROUTE.ADMIN_JOB_TYPE,
	},
	{
		icon: <BookOutlined />,
		title: "Majors",
		path: ROUTE.ADMIN_MAJOR,
	},
];

const AdminDashboardSidebar = ({ collapsed }: Props) => {
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		navigate(path);
	};

	return (
		<div className="admin-dashboard-sidebar-content">
			{ITEMS.map((item) => (
				<DashboardSidebarItem
					key={item.path}
					{...item}
					onClick={handleClick}
					collapsed={collapsed}
				/>
			))}
		</div>
	);
};

export default AdminDashboardSidebar;
