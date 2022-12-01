import React, { useEffect } from "react";
import "./SearchList.scss";
import SearchListSort from "./SearchListSort/SearchListSort";
import SearchListItem from "./SearchListItem/SearchListItem";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	searchPost,
	selectSearchPostList,
	selectSearchTotal,
} from "src/redux/slice/SearchPostSlide";
import { PaginationCommon } from "src/common";
type Props = {};

const SearchList = (props: Props) => {
	const dispatch = useReduxDispatch();
	const postList = useReduxSelector(selectSearchPostList);
	const total = useReduxSelector(selectSearchTotal);
	useEffect(() => {
		dispatch(searchPost({}));
	}, [dispatch]);

	return (
		<div className="search-list">
			<div className="search-list-head">
				<div className="search-list-head-showed">
					Showing <span className="primary-text">41-60</span> of{" "}
					<span className="primary-text">944</span> jobs
				</div>
				<div className="search-list-head-sort">
					<SearchListSort />
				</div>
			</div>
			<div className="search-list-body">
				{postList.map((post) => {
					return <SearchListItem key={post.id} {...post} />;
				})}
			</div>
			{postList.length > 0 && (
				<div className="search-list-pagination">
					<PaginationCommon total={total} showSizeChanger={false} />
				</div>
			)}
		</div>
	);
};

export default SearchList;
