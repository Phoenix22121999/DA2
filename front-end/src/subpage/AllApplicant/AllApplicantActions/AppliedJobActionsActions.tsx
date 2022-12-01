import React from "react";
import { CV } from "src/types/Type";
import { EyeOutlined, DownloadOutlined } from "@ant-design/icons";
import { useReduxDispatch } from "src/redux/redux-hook";
import { downloadCV } from "src/redux/slice/CVSlide";
import { ButtonCommon, TooltipCommon } from "src/common";
import { DetailHistoryApplyJob } from "src/types/CombineType";

type Props = {
	record: DetailHistoryApplyJob;
	handleViewPdf: (record: CV) => void;
};

const AllApplicantActions = ({ record, handleViewPdf }: Props) => {
	const dispatch = useReduxDispatch();

	const onViewClick = () => {
		handleViewPdf(record.cv);
	};

	const handleDownload = () => {
		dispatch(
			downloadCV({
				payload: {
					id_cv: record.id,
					file_name: record.cv.file_name,
					ext: record.cv.file_name_hash.split(".")[1],
				},
			})
		);
	};

	return (
		<div className="buttons-action">
			<TooltipCommon title="View">
				<ButtonCommon
					size="small"
					icon={<EyeOutlined />}
					type="success"
					onClick={onViewClick}
				/>
			</TooltipCommon>
			<TooltipCommon title="Download">
				<ButtonCommon
					size="small"
					icon={<DownloadOutlined />}
					type="danger"
					onClick={handleDownload}
				/>
			</TooltipCommon>
		</div>
	);
};

export default AllApplicantActions;
