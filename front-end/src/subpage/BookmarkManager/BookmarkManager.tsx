import React from "react";
import "./BookmarkManager.scss";
import { TableCommon } from "src/common";
import { ColumnCommon } from "src/common/TableCommon/TableCommon";
import useGetBookmarkList from "src/hooks/useGetBookmarkList";
import { DetailRecruitmentPostUserLike } from "src/types/CombineType";
import BookmarkManagerActions from "./BookmarkManagerActions/BookmarkManagerActions";
type Props = {
	isHideAdd?: boolean;
	isHideTitle?: boolean;
	isHideAction?: boolean;
	isUseCustomData?: boolean;
	customData?: DetailRecruitmentPostUserLike[];
};

const BookmarkManager = ({
	isHideAction = false,
	isHideTitle = false,
	isUseCustomData = false,
	customData = [],
}: Props) => {
	const { bookmarkList } = useGetBookmarkList();

	return (
		<div className="job-manager">
			{!isHideTitle && (
				<div className="dashboard-title">Bookmark Manager</div>
			)}
			<div className="inner-content">
				<TableCommon<DetailRecruitmentPostUserLike>
					dataSource={isUseCustomData ? customData : bookmarkList}
					rowKey="id"
				>
					<ColumnCommon
						title="Post Title"
						dataIndex={["Recruitment_Post", "title"]}
						key="title"
					/>
					<ColumnCommon
						title="Create Date"
						dataIndex="create_date"
						key="create_date"
						responsive={["lg"]}
						render={(value: string) => {
							const event = new Date(value);

							return (
								<div>{event.toLocaleDateString("vi-VI")}</div>
							);
						}}
					/>
					{!isHideAction && (
						<ColumnCommon<DetailRecruitmentPostUserLike>
							title="Action"
							key="action"
							width={"30%"}
							render={(_, record) => {
								return (
									<BookmarkManagerActions record={record} />
								);
							}}
						/>
					)}
				</TableCommon>
			</div>
		</div>
	);
};

export default BookmarkManager;
