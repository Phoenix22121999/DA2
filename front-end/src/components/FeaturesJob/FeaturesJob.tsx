import React, { useState } from "react";
import FeaturesJobItem, {
	FeaturesJobItemProps,
} from "./FeaturesJobItem/FeaturesJobItem";
import TEST_LOGO from "../../assets/images/logo.png";
import "./FeaturesJob.scss";
import { Link } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import { ButtonCommon } from "src/common";
import useEffectOnce from "./../../hooks/useEffectOne";
import api from "src/apis/index.api";
import { DetailRecruitmentPostWithoutContent } from "src/types/CombineType";
import SearchListItem from "../SearchList/SearchListItem/SearchListItem";
type Props = {};
const FEATURES_JOB: FeaturesJobItemProps[] = [
	{
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

const FeaturesJob = (props: Props) => {
	const [postList, setPostList] = useState<
		DetailRecruitmentPostWithoutContent[]
	>([]);
	useEffectOnce(() => {
		const getPosts = async () => {
			const response = await api.postApi.getListPost({
				item_per_page: 5,
			});
			if (response.data && response.data.result) {
				setPostList(response.data.result);
			}
		};
		getPosts();
	});
	return (
		<div className="features-job">
			<div className="container">
				<div className="features-job-title">Featured Job</div>
				<div className="features-job-box">
					{postList.map((post) => {
						return (
							<SearchListItem
								key={post.id}
								{...post}
								selected={post.id}
							/>
						);
					})}
				</div>
				<div className="features-job-button">
					<ButtonCommon ghost size="large" type="outstanding">
						<Link to={ROUTE.SEARCH}>All Job</Link>
					</ButtonCommon>
				</div>
			</div>
		</div>
	);
};

export default FeaturesJob;
