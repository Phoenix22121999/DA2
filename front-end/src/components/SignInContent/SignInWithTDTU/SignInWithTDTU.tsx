import React, { useEffect, useRef } from "react";
import useScript from "src/hooks/useScript";
import { GGAPI_TDTU } from "src/utils/contants";

type Props = {
	onGoogleSignIn: () => void;
};

declare const window: Window &
	typeof globalThis & {
		google: any;
		GoogleAuth: any;
	};

const SignInWithTDTU = ({ onGoogleSignIn }: Props) => {
	const googleSignInButton = useRef<HTMLDivElement>(null);

	useScript("https://accounts.google.com/gsi/client", () => {
		window.google.accounts.id.initialize({
			client_id: GGAPI_TDTU,
			callback: onGoogleSignIn,
		});
		window.google.accounts.id.renderButton(
			googleSignInButton.current,
			{
				theme: "outline",
				size: "large",
				text: "SignInWithTDTU",
				width: "250",
			} // customization attributes
		);
	});
	useEffect(() => {
		window.google = undefined;
	}, []);
	return (
		<div className="test" ref={googleSignInButton}>
			SignInWithTDTU
		</div>
	);
};

export default SignInWithTDTU;
