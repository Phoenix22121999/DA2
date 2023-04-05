import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { selectEditPostData } from "src/redux/slice/EditPostSlice";
import { getPostDetail } from "src/redux/slice/PostSlide";
import parse from "html-react-parser";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
import JobPostSidebar from "src/components/JobPostSidebar/JobPostSidebar";
import "./AdminPostDetail.scss";
type Props = {};

const AdminPostDetail = (props: Props) => {
	let { postId } = useParams();
	const dispatch = useReduxDispatch();
	const postDetail = useReduxSelector(selectEditPostData);

	useEffect(() => {
		dispatch(getPostDetail({ payload: { post_id: Number(postId) } }));
	}, [postId, dispatch]);
	return (
		<div className="admin-post-detail">
			<div className="admin-post-detail-inner">
				<div className="admin-post-detail-sidebar">
					<React.Suspense fallback={<SuspenseLoading size="large" />}>
						<JobPostSidebar
							{...postDetail}
							isHideIcon
							isHorizontal
						/>
					</React.Suspense>
				</div>
				<div className="admin-post-detail-content">
					<div className="admin-post-detail-content-title">
						Content
					</div>
					{parse(postDetail?.content || "")}
				</div>
			</div>
		</div>
	);
};

export default AdminPostDetail;
