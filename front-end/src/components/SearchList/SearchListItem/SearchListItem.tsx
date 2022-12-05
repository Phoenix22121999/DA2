import React from "react";
import "./SearchListItem.scss";
import TEST_LOGO from "../../../assets/images/logo.png";

import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
} from "@ant-design/icons";
import { DetailRecruitmentPostWithoutContent } from "src/types/CombineType";
import { inputNumberFormatter } from "./../../../utils/function";
import { ButtonCommon, TagCommon } from "src/common";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "src/utils/contants";
import classNames from "classnames";

export interface SearchListItemProps
	extends DetailRecruitmentPostWithoutContent {
	selected: number;
	onClick?: (id: number) => void;
}

const SearchListItem = ({
	title,
	from_value,
	to_value,
	address,
	post_majors,
	post_job_types,
	id,
	provinces,
	districts,
	wards,
	selected,
	onClick,
	user: { full_name },
}: SearchListItemProps) => {
	const natigate = useNavigate();
	const onViewClick = () => {
		natigate(`${ROUTE.POST_DETAIL}${id}`);
	};
	const handleClick = () => {
		onClick && onClick(id);
	};
	return (
		<div className="search-list-item" onClick={handleClick}>
			<div className="left"></div>
			<div className="right">
				<div className="top">
					<div className="top-left">
						<div className="logo">
							<img src={TEST_LOGO} alt="" />
						</div>
						<div className="top-left-content">
							<div className="title">{title}</div>
							<div className="company">{full_name}</div>
						</div>
					</div>
					<div className="top-right">
						<ButtonCommon size="small" onClick={onViewClick}>
							View Job
						</ButtonCommon>
					</div>
				</div>
				<div
					className={classNames("content", {
						"content-open": selected === id,
					})}
				>
					<div className="major">
						{post_majors.map((major) => {
							return (
								<TagCommon
									key={major.id}
									color="orange"
									size="small"
									icon={<BookOutlined />}
								>
									{major.majors.majors_name}
								</TagCommon>
							);
						})}
					</div>
					<div className="time">
						{post_job_types.map((jt) => {
							return (
								<TagCommon
									key={jt.id}
									color="yellow"
									size="small"
									icon={<ClockCircleOutlined />}
								>
									{jt.job_type.job_type_name}
								</TagCommon>
							);
						})}
					</div>
					<div className="address">
						<TagCommon
							color="red"
							size="small"
							icon={<EnvironmentOutlined />}
						>
							{wards.full_name}
						</TagCommon>
						<TagCommon
							color="red"
							size="small"
							icon={<EnvironmentOutlined />}
						>
							{districts.full_name}
						</TagCommon>
						<TagCommon
							color="red"
							size="small"
							icon={<EnvironmentOutlined />}
						>
							{provinces.full_name}
						</TagCommon>
					</div>
					<div className="salary">
						<TagCommon
							color="green"
							size="small"
							icon={<DollarOutlined />}
						>
							{inputNumberFormatter(from_value || 0)} -{" "}
							{inputNumberFormatter(to_value || 0)}
						</TagCommon>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchListItem;
