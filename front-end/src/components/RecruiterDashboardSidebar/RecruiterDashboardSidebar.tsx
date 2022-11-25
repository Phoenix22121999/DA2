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
	PlusCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";

type Props = {};
const ITEMS: DashboardSidebarItemProps[] = [
	{
		icon: <ProfileOutlined />,
		title: "Profile",
		path: "profile",
	},
	{
		icon: <FileOutlined />,
		title: "Post Manager",
		path: "job-manager",
	},
	// {
	// 	icon: <PlusCircleOutlined />,
	// 	title: "New Post",
	// 	path: ROUTE.RECRUITER_POST_NEW_JOB,
	// },
	{
		icon: <UsergroupAddOutlined />,
		title: "All Applicants",
		path: "all-applicants",
	},
	{
		icon: <KeyOutlined />,
		title: "Change Password",
		path: ROUTE.RECRUITER_CHANGE_PASSWORD,
	},
];

const RecruiterDashboardSidebar = (props: Props) => {
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		// navigate(`/recruiter/${path}`);
		navigate(path);
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
