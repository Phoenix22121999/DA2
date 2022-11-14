import React from "react";
import SignUpContent from "src/components/SignUpContent/SignUpContent";
import "./SignUp.scss";
type Props = {};

const SignUp = (props: Props) => {
	return (
		<div className="sign-up">
			<SignUpContent></SignUpContent>
		</div>
	);
};

export default SignUp;
