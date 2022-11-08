import React, { useEffect, useState } from "react";
import "./DashboardSidebarItem.scss";
import classNames from "classnames";
import { useLocation } from "react-router-dom";
export type DashboardSidebarItemProps = {
	icon: React.ReactNode;
	title: string;
	path: string;
	onClick?: (path: string) => void;
};

const DashboardSidebarItem = ({
	icon,
	title,
	onClick,
	path,
}: DashboardSidebarItemProps) => {
	const [active, setActive] = useState<boolean>(false);
	let location = useLocation();
	useEffect(() => {
		let currentPath = location.pathname;
		if (currentPath.includes(path)) {
			setActive(true);
		} else {
			setActive(false);
		}
	}, [location, path]);

	const handleClick = () => {
		onClick && onClick(path);
	};
	return (
		<div
			className={classNames("dashboard-sidebar-item", {
				"dashboard-sidebar-item-active": active,
			})}
			onClick={handleClick}
		>
			<div className="dashboard-sidebar-item-icon">{icon}</div>
			<div className="dashboard-sidebar-item-title">{title}</div>
		</div>
	);
};

export default DashboardSidebarItem;
