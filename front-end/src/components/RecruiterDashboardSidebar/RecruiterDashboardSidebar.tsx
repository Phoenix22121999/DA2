import React from "react";
import DashboardSidebarItem, {
	DashboardSidebarItemProps,
} from "../DashboardSidebarItem/DashboardSidebarItem";
import "./RecruiterDashboardSidebar.scss";
import {
	ProfileOutlined,
	FileOutlined,
	KeyOutlined,
	UsergroupAddOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type Props = {};
const ITEMS: DashboardSidebarItemProps[] = [
	{
		icon: <ProfileOutlined />,
		title: "Profile",
		path: "profile",
	},
	{
		icon: <FileOutlined />,
		title: "Job Manager",
		path: "job-manager",
	},
	{
		icon: <UsergroupAddOutlined />,
		title: "All Applicants",
		path: "all-applicants",
	},
	{
		icon: <KeyOutlined />,
		title: "Change Password",
		path: "change-password",
	},
];

const RecruiterDashboardSidebar = (props: Props) => {
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		navigate(`/recruiter/${path}`);
	};

	return (
		<div className="recruiter-dashboard-sidebar-content">
			{ITEMS.map((item) => (
				<DashboardSidebarItem
					key={item.path}
					{...item}
					onClick={handleClick}
				/>
			))}
		</div>
	);
};

export default RecruiterDashboardSidebar;
