import React, { useEffect, useState } from "react";
import { ColumnCommon, InputSearchCommon, TableCommon } from "src/common";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	resetPrameterAndSearchPost,
	selectSearchPostList,
	selectSearchTotal,
	updatePrameterAndSearchPost,
	updateSearchParameter,
} from "src/redux/slice/SearchPostSlide";
import { RecruitmentPost } from "src/types/Type";
import useEffectOnce from "./../../hooks/useEffectOne";
import AllPostActions from "./AllPostActions/AllPostActions";
import "./AllPost.scss";
import useUpdateEffect from "src/hooks/useUpdateEffect";
type Props = {};
const defaultSearch = {
	from_value: undefined,
	to_value: undefined,
	province_code: undefined,
	district_code: undefined,
	ward_code: undefined,
	list_job_type: undefined,
	list_major: undefined,
	gender: undefined,
	item_per_page: undefined,
	date_post: undefined,
};

const AllPost = (props: Props) => {
	const postList = useReduxSelector(selectSearchPostList);
	const total = useReduxSelector(selectSearchTotal);
	const dispatch = useReduxDispatch();
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);

	useEffectOnce(() => {
		// dispatch(updateSearchParameter({}));
		dispatch(
			resetPrameterAndSearchPost({
				payload: {
					page: page,
					key_word: search,
					...defaultSearch,
				},
			})
		);
	});

	useUpdateEffect(() => {
		dispatch(
			updatePrameterAndSearchPost({
				payload: {
					page: 1,
					key_word: search,
					...defaultSearch,
				},
			})
		);
	}, [search, dispatch]);

	const onChangePagination = (page: number, pageSize: number) => {
		setPage(page);
		dispatch(
			updatePrameterAndSearchPost({
				payload: {
					page: page,
				},
			})
		);
	};
	const onSearch = (value: string) => {
		setSearch(value);
	};
	return (
		<div className="all-post">
			<div className="dashboard-title">All Post</div>
			<div className="dashboard-sub-title">
				<div className="total-number">Total post: {total}</div>
				<div>
					<InputSearchCommon
						onSearch={onSearch}
						allowClear
						placeholder="Search by title"
					/>
				</div>
			</div>
			<TableCommon
				dataSource={postList}
				rowKey="id"
				pagination={{
					total: total,
					onChange: onChangePagination,
					current: page,
				}}
			>
				<ColumnCommon
					title="Post Title"
					dataIndex="title"
					key="title"
				/>
				<ColumnCommon
					title="Company"
					dataIndex={["user", "full_name"]}
					key="company"
				/>
				<ColumnCommon
					title="Create Date"
					dataIndex="create_date"
					key="create_date"
					render={(value: string) => {
						const event = new Date(value);

						return <div>{event.toLocaleDateString("vi-VI")}</div>;
					}}
				/>

				<ColumnCommon<RecruitmentPost>
					title="Action"
					key="action"
					render={(_, record) => {
						return <AllPostActions record={record} />;
					}}
				/>
			</TableCommon>
		</div>
	);
};

export default AllPost;
