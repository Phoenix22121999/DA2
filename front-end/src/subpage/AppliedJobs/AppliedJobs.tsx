import React from "react";
import { ColumnCommon, TableCommon } from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import { DetailHistoryApplyJob } from "src/types/CombineType";
import useGetApplyHistory from "../../hooks/useGetApplyHistory";
import AppliedJobActions from "./AppliedJobActions/AppliedJobActions";

type Props = {};

const AppliedJobs = (props: Props) => {
	const { applyHistory } = useGetApplyHistory();
	return (
		<div className="applied-jobs">
			<div className="dashboard-title">Applied Job</div>
			<React.Suspense fallback={<SuspenseLoading size="medium" />}>
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
									<div>
										{event.toLocaleDateString("vi-VI")}
									</div>
								);
							}}
						/>
						<ColumnCommon<DetailHistoryApplyJob>
							title="Action"
							key="action"
							width={"10%"}
							render={(_, record) => {
								return <AppliedJobActions record={record} />;
							}}
						/>
					</TableCommon>
				</div>
			</React.Suspense>
		</div>
	);
};

export default AppliedJobs;
