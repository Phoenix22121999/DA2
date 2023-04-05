import { useEffect, useState } from "react";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getListBookmark,
	selectBookmarkList,
} from "src/redux/slice/BookmarkSlide";
import { useUserAuth } from "./useUserAuth";

function useGetBookmarkList(isDisable: boolean = false) {
	const [first, setFirst] = useState(true);
	const bookmarkList = useReduxSelector(selectBookmarkList);
	const dispatch = useReduxDispatch();
	const { isAuth } = useUserAuth();
	useEffect(() => {
		if (!isAuth) {
			return;
		}
		if (!first) {
			return;
		}
		if (isDisable) {
			return;
		}
		setFirst(false);

		if (bookmarkList.length <= 0) {
			dispatch(
				getListBookmark({
					payload: {
						item_per_page: 999999,
					},
				})
			);
			return;
		}
	}, [dispatch, first, bookmarkList, isDisable, isAuth]);

	return { bookmarkList: isDisable || !isAuth ? [] : bookmarkList };
}

export default useGetBookmarkList;
