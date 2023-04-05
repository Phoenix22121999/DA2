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
	FileOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
type Props = {
	collapsed?: boolean;
};
const ITEMS: DashboardSidebarItemProps[] = [
	{
		icon: <UserOutlined />,
<<<<<<< HEAD
		title: "Dashboard",
		path: ROUTE.ADMIN_DASHBOARD,
	},
	{
		icon: <UserOutlined />,
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
		title: "Account Manager",
		path: ROUTE.ADMIN_ACCOUNT,
	},
	{
<<<<<<< HEAD
		icon: <UserOutlined />,
		title: "Request Manager",
		path: ROUTE.ADMIN_REQUEST,
	},
	{
		icon: <FileOutlined />,
		title: "All Post",
		path: ROUTE.ADMIN_ALL_POST,
	},
	{
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
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
