import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { ButtonCommon } from "src/common";
import "./Error.scss";
type Props = {};

const Error = (props: Props) => {
	const [title, setTitle] = useState("Error");
	let error = useRouteError();
	useEffect(() => {
		if (isRouteErrorResponse(error)) {
			switch (error.status) {
				case 404:
					setTitle("Page not found");
					break;

				default:
					break;
			}
		}
	}, [error]);

	return (
		<div className="error-page">
			<div className="error-title">{title}</div>
			<div className="error-button-back-to-home-page">
				<Link to={"/"}>
					<ButtonCommon>Back to homepage</ButtonCommon>
				</Link>
			</div>
		</div>
	);
};

export default Error;
