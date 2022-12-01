import React, { useEffect, useState } from "react";
import "./SearchList.scss";
import SearchListSort from "./SearchListSort/SearchListSort";
import SearchListItem from "./SearchListItem/SearchListItem";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	searchPost,
	selectSearchPostList,
	selectSearchTotal,
	updatePrameterAndSearchPost,
} from "src/redux/slice/SearchPostSlide";
import { PaginationCommon } from "src/common";
import SuspenseLoading from "../SuspenseLoading/SuspenseLoading";
import { useScrollToTop } from "src/hooks/useScrollToTop";
type Props = {};

const SearchList = (props: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectSearchPostList);
	const total = useReduxSelector(selectSearchTotal);
	useScrollToTop(postList);

	const [selected, setSelected] = useState<number>(0);
	const onClick = (id: number) => {
		if (id === selected) {
			setSelected(0);
			return;
		}
		setSelected(id);
	};
	const onChangePagination = (page: number, pageSize: number) => {
		dispatch(
			updatePrameterAndSearchPost({
				payload: {
					page: page,
				},
			})
		);
	};
	return (
		<div className="search-list">
			<React.Suspense fallback={<SuspenseLoading size="large" />}>
				<div className="search-list-head">
					<div className="search-list-head-showed">
						Showing <span className="primary-text">41-60</span> of{" "}
						<span className="primary-text">{total}</span> posts
					</div>
					<div className="search-list-head-sort">
						<SearchListSort />
					</div>
				</div>
				<div className="search-list-body">
					{postList.map((post) => {
						return (
							<SearchListItem
								key={post.id}
								{...post}
								selected={selected}
								onClick={onClick}
							/>
						);
					})}
				</div>
				{postList.length > 0 && (
					<div className="search-list-pagination">
						<PaginationCommon
							total={total}
							pageSize={10}
							showSizeChanger={false}
							onChange={onChangePagination}
						/>
					</div>
				)}
			</React.Suspense>
		</div>
	);
};

export default SearchList;
