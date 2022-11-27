import React, { useState, useEffect } from "react";
import { useModal } from "src/hooks/useModal";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListMajor, selectMajorList } from "src/redux/slice/MajorSlide";
import { Majors } from "src/types/Type";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import ModalCommon from "../ModalCommon/ModalCommon";
import TableCommon, { ColumnCommon } from "../TableCommon/TableCommon";
import AddMajorModal from "./AddMajorModal/AddMajorModal";
import MajorActions from "./MajorActions/MajorActions";
import RenameMajorModal from "./RenameMajorModal/RenameMajorModal";

type Props = {};

const MajorManager = (props: Props) => {
	const { isOpen, close, open } = useModal(false);
	const {
		isOpen: isRenameOpen,
		close: renameClose,
		open: renameOpen,
	} = useModal(false);
	const [edited, setEdited] = useState<Majors>();
	const [first, setFirst] = useState(true);

	const handleRenameClick = (record: Majors) => {
		setEdited(record);
		renameOpen();
	};
	const dispatch = useReduxDispatch();
	const majorList = useReduxSelector(selectMajorList);

	useEffect(() => {
		if (first) {
			if (majorList.length === 0) {
				dispatch(getListMajor({}));
			}
			setFirst(false);
		}
	}, [dispatch, first, majorList]);

	return (
		<div>
			<div className="dashboard-title">Job Type Manager</div>
			<div className="button-add-action">
				<ButtonCommon size="small" onClick={open}>
					Add Major
				</ButtonCommon>
			</div>
			<TableCommon<Majors> dataSource={majorList} rowKey="id">
				<ColumnCommon
					title="Type Name"
					dataIndex="majors_name"
					key="majors_name"
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
				<ColumnCommon<Majors>
					title="Action"
					key="action"
					width={"10%"}
					render={(_, record) => {
						return (
							<MajorActions
								record={record}
								handleRenameClick={handleRenameClick}
							/>
						);
					}}
				/>
			</TableCommon>
			<ModalCommon open={isOpen} onCancel={close} footer={null}>
				<AddMajorModal onClose={close} />
			</ModalCommon>
			<ModalCommon
				centered
				open={isRenameOpen}
				onCancel={renameClose}
				footer={null}
			>
				<RenameMajorModal onClose={renameClose} edited={edited} />
			</ModalCommon>
		</div>
	);
};

export default MajorManager;
