import { useState } from "react";
type UseModalHook = {
	isOpen: boolean;
	close: () => void;
	open: () => void;
	toggle: () => void;
};
export const useModal = (initIsOpen: boolean): UseModalHook => {
	const [isOpen, setIsOpen] = useState(initIsOpen);
	const close = () => {
		setIsOpen(false);
	};
	const open = () => {
		setIsOpen(true);
	};
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return {
		isOpen,
		close,
		open,
		toggle,
	};
};
