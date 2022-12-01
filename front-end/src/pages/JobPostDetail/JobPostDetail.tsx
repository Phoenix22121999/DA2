import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import JobDetailBanner from "src/components/JobDetailBanner/JobDetailBanner";
import JobPostSidebar from "src/components/JobPostSidebar/JobPostSidebar";
import "./JobPostDetail.scss";
import { useReduxDispatch, useReduxSelector } from "./../../redux/redux-hook";
import { getPostDetail } from "src/redux/slice/PostSlide";
import { selectEditPostData } from "src/redux/slice/EditPostSlice";
import parse from "html-react-parser";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
type Props = {};

const JobPostDetail = (props: Props) => {
	let { postID } = useParams();
	const dispatch = useReduxDispatch();
	const postDetail = useReduxSelector(selectEditPostData);
	useEffect(() => {
		if (postID) {
			dispatch(
				getPostDetail({
					payload: {
						post_id: Number(postID),
					},
				})
			);
		}
	}, [postID, dispatch]);

	return (
		<div className="job-post-detail">
			<React.Suspense fallback={<SuspenseLoading size="large" />}>
				<div className="containner">
					<div className="job-detail-banner">
						<JobDetailBanner {...postDetail} />
					</div>
					<div className="job-post-detail-inner">
						<div className="job-post-detail-content">
							{parse(postDetail?.content || "")}
						</div>
						<div className="job-post-detail-sidebar">
							<JobPostSidebar {...postDetail} />
						</div>
					</div>
				</div>
			</React.Suspense>
		</div>
	);
};

export default JobPostDetail;
