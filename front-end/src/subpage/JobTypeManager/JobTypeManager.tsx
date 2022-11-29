import React, { useState, useEffect } from "react";
import { ButtonCommon, ModalCommon, TableCommon } from "src/common";
import { ColumnCommon } from "src/common/TableCommon/TableCommon";
import { useModal } from "src/hooks/useModal";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	getListJobType,
	selectJobTypeList,
} from "src/redux/slice/JobTypeSlide";
import { JobType } from "src/types/Type";
import AddJobTypeModal from "./AddJobTypeModal/AddJobTypeModal";
import JobTypeActions from "./JobTypeActions/JobTypeActions";
import RenameJobTypeModal from "./RenameJobTypeModal/RenameJobTypeModal";

type Props = {};

const JobTypeManager = (props: Props) => {
	const { isOpen, close, open } = useModal(false);
	const {
		isOpen: isRenameOpen,
		close: renameClose,
		open: renameOpen,
	} = useModal(false);
	const [edited, setEdited] = useState<JobType>();
	const [first, setFirst] = useState(true);

	const handleRenameClick = (record: JobType) => {
		setEdited(record);
		renameOpen();
	};
	const dispatch = useReduxDispatch();
	const jobTypeList = useReduxSelector(selectJobTypeList);

	useEffect(() => {
		if (first) {
			if (jobTypeList.length === 0) {
				dispatch(getListJobType({ payload: {} }));
			}
			setFirst(false);
		}
	}, [dispatch, first, jobTypeList]);

	return (
		<div>
			<div className="dashboard-title">Job Type Manager</div>
			<div className="button-add-action">
				<ButtonCommon size="small" onClick={open}>
					Add Job Type
				</ButtonCommon>
			</div>
			<TableCommon<JobType> dataSource={jobTypeList} rowKey="id">
				<ColumnCommon
					title="Type Name"
					dataIndex="job_type_name"
					key="job_type_name"
				/>
				<ColumnCommon
					title="Create Date"
					dataIndex="create_date"
					key="create_date"
					render={(value: string) => {
						const event = new Date(value);

						return <div>{event.toLocaleDateString("vi-VI")}</div>;
					}}
				/>
				<ColumnCommon<JobType>
					title="Action"
					key="action"
					width={"10%"}
					render={(_, record) => {
						return (
							<JobTypeActions
								record={record}
								handleRenameClick={handleRenameClick}
							/>
						);
					}}
				/>
			</TableCommon>
			<ModalCommon open={isOpen} onCancel={close} footer={null}>
				<AddJobTypeModal onClose={close} />
			</ModalCommon>
			<ModalCommon
				centered
				open={isRenameOpen}
				onCancel={renameClose}
				footer={null}
			>
				<RenameJobTypeModal onClose={renameClose} edited={edited} />
			</ModalCommon>
		</div>
	);
};

export default JobTypeManager;
