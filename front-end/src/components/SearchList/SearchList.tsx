import React from "react";
import "./SearchList.scss";
import SearchListSort from "./SearchListSort/SearchListSort";
import TEST_LOGO from "../../assets/images/logo.png";
import SearchListItem, {
	SearchListItemProps,
} from "./SearchListItem/SearchListItem";
import PaginationCommon from "../PaginationCommon/PaginationCommon";
type Props = {};

const FEATURES_JOB: SearchListItemProps[] = [
	{
		id: 1,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 2,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 3,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 4,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 5,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 6,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 7,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 8,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 9,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
	{
		id: 10,
		logo: TEST_LOGO,
		major: "string",
		title: "string",
		company: "string",
		description: "string",
		time: "string",
		address: "string",
		salary: "string",
	},
];

const SearchList = (props: Props) => {
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
				{FEATURES_JOB.map((features_job) => {
					return (
						<SearchListItem
							key={features_job.id}
							{...features_job}
						/>
					);
				})}
			</div>
			<div className="search-list-pagination">
				<PaginationCommon total={500} showSizeChanger={false} />
			</div>
		</div>
	);
};

export default SearchList;
