import React from "react";
import { Tabs } from "antd";
import "./TabCommon.scss";
type Props = {
	item?: TabItemType[];
};
const itemss = [
	{ label: "Tab 1", key: "item-1", children: "Content 1" }, // remember to pass the key prop
	{ label: "Tab 2", key: "item-2", children: "Content 2" },
];
export type TabItemType = {
	label: string;
	key: string;
	children: React.ReactNode;
};
const TabCommon = ({ item = itemss }: Props) => {
	return (
		<div className="tab-common">
			<Tabs items={item} className="tab-common-inner" centered />
		</div>
	);
};

export default TabCommon;
