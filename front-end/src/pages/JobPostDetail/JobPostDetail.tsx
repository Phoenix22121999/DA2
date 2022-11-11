import React from "react";
import { useParams } from "react-router-dom";
import JobDetailBanner from "src/components/JobDetailBanner/JobDetailBanner";
import JobPostSidebar from "src/components/JobPostSidebar/JobPostSidebar";
import "./JobPostDetail.scss";
type Props = {};

const JobPostDetail = (props: Props) => {
	let { postID } = useParams();
	return (
		<div className="job-post-detail">
			<div className="containner">
				<div className="job-detail-banner">
					<JobDetailBanner />
				</div>
				<div className="job-post-detail-inner">
					<div className="job-post-detail-content">
						JobPostDetail {postID}
					</div>
					<div className="job-post-detail-sidebar">
						<JobPostSidebar />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobPostDetail;
