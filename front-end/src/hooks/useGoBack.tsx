import { useNavigate } from "react-router-dom";

export const useGoBack = (step: number = 1) => {
	const navigate = useNavigate();
	const onGoBack = () => {
		navigate(-step);
	};
	return onGoBack;
};
