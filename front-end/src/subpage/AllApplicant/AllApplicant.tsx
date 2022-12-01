import React, { useState } from "react";
import { ColumnCommon, ModalCommon, TableCommon } from "src/common";
import useGetApplyHistory from "src/hooks/useGetApplyHistory";
import { useModal } from "src/hooks/useModal";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import { CV } from "src/types/Type";
import ShowCVModal from "../CVManager/ShowCVModal/ShowCVModal";
import AllApplicantActions from "./AllApplicantActions/AppliedJobActionsActions";

type Props = {};

const AllApplicant = (props: Props) => {
	const { applyHistory } = useGetApplyHistory();
	const {
		isOpen: isViewOpen,
		close: viewClose,
		open: viewOpen,
	} = useModal(false);

	const [viewed, setViewed] = useState<CV>();

	const handleViewPdf = (record: CV) => {
		setViewed(record);
		viewOpen();
	};

	return (
		<div className="applied-jobs">
			<div className="dashboard-title">All Applicant</div>
			<div className="inner-content">
				<TableCommon dataSource={applyHistory}>
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
						title="Create Date"
						dataIndex="create_date"
						key="create_date"
						render={(value: string) => {
							const event = new Date(value);

							return (
								<div>{event.toLocaleDateString("vi-VI")}</div>
							);
						}}
					/>
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
