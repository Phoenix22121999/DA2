import { useEffect, useState } from "react";

import useGetApplyHistory from "./useGetApplyHistory";

function useCheckIsApplied(postID: number) {
	const [isApplied, setIsApplied] = useState(false);
	const { applyHistory } = useGetApplyHistory();

	useEffect(() => {
		let tmep = false;
		applyHistory.forEach((i) => {
			if (i.post_id === postID) {
				tmep = true;
			}
		});
		setIsApplied(tmep);
	}, [applyHistory, postID]);

	return isApplied;
}

export default useCheckIsApplied;
