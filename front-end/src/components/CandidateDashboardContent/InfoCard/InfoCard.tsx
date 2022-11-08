import React from "react";
import "./InfoCard.scss";
export type InfoCardProps = {
	icon: React.ReactNode;
	title: string;
	number?: number;
};

const InfoCard = ({ icon, title, number }: InfoCardProps) => {
	return (
		<div className="info-card">
			<div className="info-card-inner">
				<div className="info-card-icon">{icon}</div>
				<div className="info-card-title">{title}</div>
				{number ? (
					<div className="info-card-number">({number})</div>
				) : null}
			</div>
		</div>
	);
};

export default InfoCard;
