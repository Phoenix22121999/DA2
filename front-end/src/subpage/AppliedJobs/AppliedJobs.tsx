import React from "react";
import { ColumnCommon, TableCommon } from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import useGetApplyHistory from "../../hooks/useGetApplyHistory";
import AppliedJobActions from "./AppliedJobActions/AppliedJobActions";

type Props = {
	isHideTitle?: boolean;
	isHideAction?: boolean;
	isUseCustomData?: boolean;
	customData?: DetailHistoryApplyJob[];
};

const AppliedJobs = ({
	isHideAction = false,
	isHideTitle = false,
	isUseCustomData = false,
	customData = [],
}: Props) => {
	const { applyHistory } = useGetApplyHistory(isUseCustomData);

	return (
		<div className="applied-jobs">
			{!isHideTitle && <div className="dashboard-title">Applied Job</div>}
			<React.Suspense fallback={<SuspenseLoading size="medium" />}>
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
							title="Create Date"
							dataIndex="create_date"
							key="create_date"
							render={(value: string) => {
								const event = new Date(value);

								return (
									<div>
										{event.toLocaleDateString("vi-VI")}
									</div>
								);
							}}
						/>
						{!isHideAction && (
							<ColumnCommon<DetailHistoryApplyJob>
								title="Action"
								key="action"
								width={"10%"}
								render={(_, record) => {
									return (
										<AppliedJobActions record={record} />
									);
								}}
							/>
						)}
					</TableCommon>
				</div>
			</React.Suspense>
		</div>
	);
};

export default AppliedJobs;
