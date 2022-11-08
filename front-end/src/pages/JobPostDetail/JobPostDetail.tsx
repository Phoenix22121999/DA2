import React from "react";
import { useParams } from "react-router-dom";

type Props = {};

const JobPostDetail = (props: Props) => {
	let { postID } = useParams();
	return <div>JobPostDetail {postID}</div>;
};

export default JobPostDetail;
