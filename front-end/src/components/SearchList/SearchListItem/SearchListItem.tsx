import React from "react";
import "./SearchListItem.scss";
import TEST_LOGO from "../../../assets/images/logo.png";
import ButtonCommon from "../../ButtonCommon/ButtonCommon";

import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
} from "@ant-design/icons";
import TagCommon from "src/components/TagCommon/TagCommon";
import { RecruitmentPostWithUser } from "src/types/Combine";
import { inputNumberFormatter } from "./../../../utils/function";

export interface SearchListItemProps extends RecruitmentPostWithUser {}

const SearchListItem = ({
	title,
	from_value,
	to_value,
	user: { full_name, address },
}: SearchListItemProps) => {
	return (
		<div className="search-list-item">
			<div className="left">
				<div className="logo">
					<img src={TEST_LOGO} alt="" />
				</div>
			</div>
			<div className="right">
				<div className="top">
					<div className="top-left">
						<div className="title">{title}</div>
						<div className="company">{full_name}</div>
					</div>
					<div className="top-right">
						<ButtonCommon size="small">Apply</ButtonCommon>
					</div>
				</div>
				<div className="content">
					<div className="major">
						<TagCommon
							color="orange"
							size="medium"
							icon={<BookOutlined />}
						>
							Marketing
						</TagCommon>
					</div>
					<div className="time">
						{" "}
						<TagCommon
							color="yellow"
							size="medium"
							icon={<ClockCircleOutlined />}
						>
							Full time
						</TagCommon>
					</div>
					<div className="address">
						<TagCommon
							color="red"
							size="medium"
							icon={<EnvironmentOutlined />}
						>
							{address}
						</TagCommon>
					</div>
					<div className="salary">
						<TagCommon
							color="green"
							size="medium"
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
