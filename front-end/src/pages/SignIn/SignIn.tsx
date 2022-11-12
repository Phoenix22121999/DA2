import React from "react";
import SignInContent from "src/components/SignInContent/SignInContent";
import "./SignIn.scss";
type Props = {};

const SignIn = (props: Props) => {
	return (
		<div className="sign-in">
			<SignInContent />
		</div>
	);
};

export default SignIn;
