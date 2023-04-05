import React, { useState } from "react";
import { ColumnCommon, ModalCommon, TableCommon } from "src/common";
import useGetApplyHistory from "src/hooks/useGetApplyHistory";
import { useModal } from "src/hooks/useModal";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import { CV } from "src/types/Type";
import ShowCVModal from "../CVManager/ShowCVModal/ShowCVModal";
import AllApplicantActions from "./AllApplicantActions/AppliedJobActionsActions";
import { useNavigate } from "react-router-dom";
import { setAccountDetailData } from "src/redux/slice/AccountSilce";
import { useReduxDispatch } from "src/redux/redux-hook";
import { ROUTE } from "src/utils/contants";
import "./AllApplicant.scss";
type Props = {
	isHideTitle?: boolean;
	isHideAction?: boolean;
	isUseCustomData?: boolean;
	customData?: DetailHistoryApplyJob[];
};

const AllApplicant = ({
	isHideAction = false,
	isHideTitle = false,
	isUseCustomData = false,
	customData = [],
}: Props) => {
	const { applyHistory } = useGetApplyHistory(isUseCustomData);
	const {
		isOpen: isViewOpen,
		close: viewClose,
		open: viewOpen,
	} = useModal(false);
	const navigate = useNavigate();

	const [viewed, setViewed] = useState<CV>();

	const handleViewPdf = (record: CV) => {
		setViewed(record);
		viewOpen();
	};
	const dispatch = useReduxDispatch();

	const toAccountDetail = (id: number) => {
		dispatch(setAccountDetailData(id));
		navigate(ROUTE.ADMIN_ACCOUNT_DETAIL);
	};

	return (
		<div className="applied-jobs">
			{!isHideTitle && (
				<div className="dashboard-title">All Applicant</div>
			)}
			<div className="inner-content">
				<TableCommon
					dataSource={isUseCustomData ? customData : applyHistory}
					rowKey="id"
				>
					<ColumnCommon
						title="Post"
						dataIndex={["Recruitment_Post", "title"]}
						key="title"
					/>
					<ColumnCommon
						title="CV"
						dataIndex={["cv", "file_name"]}
						key="file_name"
					/>
					<ColumnCommon
						title="Applicant"
						dataIndex={["user_account", "username"]}
						key="username"
						render={(
							value: string,
							record: DetailHistoryApplyJob
						) => {
							return (
								<div
									className="applicant-username"
									onClick={() =>
										toAccountDetail(record.user_account.id)
									}
								>
									{value}
								</div>
							);
						}}
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
						<ColumnCommon<DetailHistoryApplyJob>
							title="Action"
							key="action"
							width={"30%"}
							render={(_, record) => {
								return (
									<AllApplicantActions
										record={record}
										handleViewPdf={handleViewPdf}
									/>
								);
							}}
						/>
					)}
				</TableCommon>
			</div>
			<ModalCommon
				centered
				open={isViewOpen}
				onCancel={viewClose}
				footer={null}
				width="auto"
			>
				<ShowCVModal record={viewed} />
			</ModalCommon>
		</div>
	);
};

export default AllApplicant;
