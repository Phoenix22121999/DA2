import React from "react";
import "./HowItWordItem.scss";
export type HowItWordItemProps = {
	icon: React.ReactNode;
	title: string;
	content: string;
	number: number;
};

const HowItWordItem = ({
	icon,
	title,
	content,
	number,
}: HowItWordItemProps) => {
	return (
		<div className="how-it-word-item">
			<div className="how-it-word-number">{number}</div>
			<div className="how-it-word-icon">{icon}</div>
			<div className="how-it-word-item-bottom">
				<div className="how-it-word-item-title">{title}</div>
				<div className="how-it-word-content">{content}</div>
			</div>
		</div>
	);
};

export default HowItWordItem;
