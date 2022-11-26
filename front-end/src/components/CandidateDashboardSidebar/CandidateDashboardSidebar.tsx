import React from "react";
import DashboardSidebarItem, {
	DashboardSidebarItemProps,
} from "../DashboardSidebarItem/DashboardSidebarItem";
import "./CandidateDashboardSidebar.scss";
import {
	ProfileOutlined,
	FileOutlined,
	KeyOutlined,
	SnippetsOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

type Props = {};
const ITEMS: DashboardSidebarItemProps[] = [
	// {
	// 	icon: <HomeOutlined />,
	// 	title: "Dashboard",
	// 	path: "dashboard",
	// },
	{
		icon: <ProfileOutlined />,
		title: "Profile",
		path: "profile",
	},
	{
		icon: <FileOutlined />,
		title: "CV Manager",
		path: "cv-manager",
	},
	{
		icon: <SnippetsOutlined />,
		title: "Applied Jobs",
		path: "applied-jobs",
	},
	{
		icon: <KeyOutlined />,
		title: "Change Password",
		path: "change-password",
	},
];

const CandidateDashboardSidebar = (props: Props) => {
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		navigate(`/cadidate/${path}`);
	};

	return (
		<div className="candidate-dashboard-sidebar-content sidebar-content-common">
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

export default CandidateDashboardSidebar;
