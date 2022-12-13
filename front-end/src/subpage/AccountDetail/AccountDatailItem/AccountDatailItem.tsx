import React from "react";
import "./AccountDatailItem.scss";
type Props = {
	title: string;
	value: string | number;
};

const AccountDatailItem = ({ title, value }: Props) => {
	return (
		<div className="account-datail-item-warrper">
			<div className="account-datail-item-title">{title}</div>
			<div className="account-datail-item-value">{value}</div>
		</div>
	);
};

export default AccountDatailItem;
