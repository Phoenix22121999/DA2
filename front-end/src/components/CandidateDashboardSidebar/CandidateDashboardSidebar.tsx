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
	HeartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
type Props = {
	collapsed?: boolean;
};
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
		icon: <HeartOutlined />,
		title: "Bookmark",
		path: "bookmark-manager",
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

const CandidateDashboardSidebar = ({ collapsed }: Props) => {
	const navigate = useNavigate();
	const handleClick = (path: string) => {
		navigate(`/cadidate/${path}`);
	};

	return (
		<div className="candidate-dashboard-sidebar-content">
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

export default CandidateDashboardSidebar;
