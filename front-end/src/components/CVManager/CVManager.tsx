import React, { useEffect, useState } from "react";
import "./CVManager.scss";
import AddCVModal from "../AddCVModal/AddCVModal";
import { useModal } from "src/hooks/useModal";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { getListCV, selectCVList } from "src/redux/slice/CVSlide";
import { CV } from "src/types/Type";
import CVActions from "./CVActions/CVActions";
import ReanmeCVModal from "../RenameCVModal/RenameCVModal";
import ShowCVModal from "./../ShowCVModal/ShowCVModal";
import ButtonCommon from "src/common/ButtonCommon/ButtonCommon";
import { ModalCommon, TableCommon } from "src/common";
import { ColumnCommon } from "src/common/TableCommon/TableCommon";
type Props = {};

const CVManager = (props: Props) => {
	const { isOpen, close, open } = useModal(false);
	const {
		isOpen: isRenameOpen,
		close: renameClose,
		open: renameOpen,
	} = useModal(false);
	const {
		isOpen: isViewOpen,
		close: viewClose,
		open: viewOpen,
	} = useModal(false);
	const cvList = useReduxSelector(selectCVList);
	const [edited, setEdited] = useState<CV>();
	const [viewed, setViewed] = useState<CV>();
	const dispatch = useReduxDispatch();
	useEffect(() => {
		dispatch(getListCV({}));
	}, [dispatch]);
	useEffect(() => {}, [cvList]);

	const handleRenameClick = (record: CV) => {
		setEdited(record);
		renameOpen();
	};

	const handleViewPdf = (record: CV) => {
		setViewed(record);
		viewOpen();
	};

	return (
		<div className="cv-manager">
			<div className="dashboard-title">CV Manager</div>
			<div>
				<ButtonCommon size="small" onClick={open}>
					Add cv
				</ButtonCommon>
			</div>
			<div className="inner-content">
				<TableCommon dataSource={cvList} rowKey="id">
					<ColumnCommon
						title="CV Name"
						dataIndex="file_name"
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
					<ColumnCommon<CV>
						title="Action"
						key="action"
						width={"30%"}
						render={(_, record) => {
							return (
								<CVActions
									record={record}
									handleRenameClick={handleRenameClick}
									handleViewPdf={handleViewPdf}
								/>
							);
						}}
					/>
				</TableCommon>
			</div>
			<ModalCommon open={isOpen} onCancel={close} footer={null}>
				<AddCVModal onClose={close} />
			</ModalCommon>
			<ModalCommon
				centered
				open={isRenameOpen}
				onCancel={renameClose}
				footer={null}
			>
				<ReanmeCVModal onClose={renameClose} edited={edited} />
			</ModalCommon>
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

export default CVManager;
