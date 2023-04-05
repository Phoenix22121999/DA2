import React, { useEffect, useMemo, useRef, useState } from "react";
import "./SearchListItem.scss";
import FAKE_LOGO from "../../../assets/images/logo.png";

import {
	ClockCircleOutlined,
	EnvironmentOutlined,
	DollarOutlined,
	BookOutlined,
	HeartOutlined,
} from "@ant-design/icons";
import { DetailRecruitmentPostWithoutContent } from "src/types/CombineType";
import { inputNumberFormatter } from "./../../../utils/function";
import { ButtonCommon, TagCommon } from "src/common";
import { useNavigate } from "react-router-dom";
import { CDN_URL, ROUTE, USER_TYPE } from "src/utils/contants";
import classNames from "classnames";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	bookmark,
	selectBookmarkList,
	unBookmark,
} from "src/redux/slice/BookmarkSlide";
import { message } from "antd";
import { useCheckUserAuth } from "src/hooks/useCheckUserAuth";

export interface SearchListItemProps
	extends DetailRecruitmentPostWithoutContent {
	selected: number;
	onClick?: (id: number) => void;
	isDisableCollapse?: boolean;
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
	isDisableCollapse,
	user: { full_name, avartar },
}: SearchListItemProps) => {
	const natigate = useNavigate();
	const dispatch = useReduxDispatch();
	const ref = useRef<HTMLDivElement>(null);
	const [isBookmark, setIsBookmark] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const bookmarkList = useReduxSelector(selectBookmarkList);
	const isAuth = useCheckUserAuth(USER_TYPE.CANDIDATE);
	const avatarMemo = useMemo(() => {
		if (!avartar) {
			return FAKE_LOGO;
		}
		if (avartar.includes("https")) {
			return avartar;
		}
		return `${CDN_URL}/${avartar}`;
	}, [avartar]);
	useEffect(() => {
		setIsBookmark(bookmarkList.some((bookmark) => bookmark.post_id === id));
	}, [bookmarkList, id]);

	const onViewClick = () => {
		natigate(`${ROUTE.POST_DETAIL}${id}`);
	};
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (ref.current?.contains(e.target as Node)) {
			return;
		}

		onClick && onClick(id);
	};
	const callback = (isSuccess: boolean) => {
		if (isSuccess) {
			message.success(
				isBookmark ? "un bookmark successfull" : "bookmark successfull"
			);
			setIsBookmark(!isBookmark);
		} else {
			message.error(isBookmark ? "un bookmark fail" : "bookmark fail");
		}
		setIsLoading(false);
	};
	const onBookmarkClick = () => {
		if (!isAuth) {
			message.error("please sign in to bookmark");

			return;
		}
		setIsLoading(true);
		if (!isBookmark) {
			dispatch(
				bookmark({
					payload: {
						post_id: id,
					},
					callback,
				})
			);
		} else {
			dispatch(
				unBookmark({
					payload: {
						post_id: id,
					},
					callback,
				})
			);
		}
	};
	return (
		<div className="search-list-item" onClick={handleClick}>
			<div className="left"></div>
			<div className="right">
				<div className="top">
					<div className="top-left">
						<div className="logo">
							<img
								src={avatarMemo ? avatarMemo : FAKE_LOGO}
								alt=""
							/>
						</div>
						<div className="top-left-content">
							<div className="title">{title}</div>
							<div className="company">{full_name}</div>
						</div>
					</div>
					<div className="top-right" ref={ref}>
						{isAuth && (
							<ButtonCommon
								loading={isLoading}
								size="small"
								onClick={onBookmarkClick}
								type={isBookmark ? "outstanding" : "success"}
								icon={<HeartOutlined />}
							/>
						)}
						<ButtonCommon size="small" onClick={onViewClick}>
							View Job
						</ButtonCommon>
					</div>
				</div>
				<div
					className={classNames("content", {
						"content-open": selected === id,
						"is-disable-collapse": isDisableCollapse,
					})}
				>
					<div className="major">
						<div className="content-item-title">Major:</div>
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
						<div className="content-item-title">Job Type:</div>

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
						<div className="content-item-title">Location:</div>
						{wards && (
							<TagCommon
								color="red"
								size="small"
								icon={<EnvironmentOutlined />}
							>
								{wards.full_name}
							</TagCommon>
						)}

						{districts && (
							<TagCommon
								color="red"
								size="small"
								icon={<EnvironmentOutlined />}
							>
								{districts.full_name}
							</TagCommon>
						)}

						{provinces && (
							<TagCommon
								color="red"
								size="small"
								icon={<EnvironmentOutlined />}
							>
								{provinces.full_name}
							</TagCommon>
						)}
					</div>
					<div className="salary">
						<div className="content-item-title">Salary:</div>
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
