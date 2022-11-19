import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { CV } from "src/types/Type";
import { CDN_URL } from "src/utils/contants";
import "./ShowCVModal.scss";
import ButtonCommon from "./../ButtonCommon/ButtonCommon";
type Props = {
	record?: CV;
};

const ShowCVModal = ({ record }: Props) => {
	const [file, setFile] = useState<string>();
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	/*To Prevent right click on screen*/
	//   document.addEventListener("contextmenu", (event) => {
	//     event.preventDefault();
	//   });

	/*When document gets loaded successfully*/
	function onDocumentLoadSuccess({ numPages }: any) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	function changePage(offset: any) {
		setPageNumber((prevPageNumber) => prevPageNumber + offset);
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}
	useEffect(() => {
		if (record) {
			setFile(`${CDN_URL}/${record?.file_name_hash}`);
		}
	}, [record]);

	return (
		<div className="show-cv-modal">
			{" "}
			<Document
				file={file}
				options={{
					cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
					cMapPacked: true,
				}}
				onLoadSuccess={onDocumentLoadSuccess}
			>
				<Page
					pageNumber={pageNumber}
					className="cv-pdf-container"
					//  renderTextLayer={false}
				/>
			</Document>
			<div className="cv-pdf-button-gr">
				<div className="pagec">
					Page {pageNumber || (numPages ? 1 : "--")} of{" "}
					{numPages || "--"}
				</div>
				<div className="buttonc">
					<ButtonCommon
						disabled={pageNumber <= 1}
						onClick={previousPage}
						className="Pre"
						size="small"
					>
						Previous
					</ButtonCommon>
					<ButtonCommon
						disabled={pageNumber >= (numPages || 0)}
						onClick={nextPage}
						size="small"
					>
						Next
					</ButtonCommon>
				</div>
			</div>
		</div>
	);
};

export default ShowCVModal;
