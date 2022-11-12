import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type Props = {};

const modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		["bold", "italic", "underline", "strike", "blockquote"],
		[
			{ list: "ordered" },
			{ list: "bullet" },
			{ indent: "-1" },
			{ indent: "+1" },
		],
		["link", "image", "video"],
		["clean"],
	],
	clipboard: {
		// toggle to add extra line breaks when pasting HTML:
		matchVisual: false,
	},
};

const StepTwo = (props: Props) => {
	const [value, setValue] = useState("");

	return (
		<div className="step-one">
			<div
				style={{
					border: "1px solid black",
					padding: "2px",
					minHeight: "400px",
					width: "100%",
				}}
			>
				<ReactQuill
					modules={modules}
					theme="snow"
					value={value}
					onChange={setValue}
				/>
			</div>
		</div>
	);
};

export default StepTwo;
