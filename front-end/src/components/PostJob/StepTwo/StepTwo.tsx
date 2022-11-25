import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	nextStep,
	prevStep,
	updateNewPost,
} from "src/redux/slice/NewPostSlice";
import ButtonCommon from "./../../ButtonCommon/ButtonCommon";
// import parse from "html-react-parser";
import "./StepTwo.scss";
import { createPost } from "./../../../redux/slice/PostSlide";

type Props = {};
const modules = {
	toolbar: [
		[{ header: "1" }, { header: "2" }, { font: [] }],
		[{ size: [] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ align: [] }],
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		[{ script: "sub" }, { script: "super" }],
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
		// matchVisual: false,
	},
};

const StepTwo = (props: Props) => {
	// const [value, setValue] = useState("");
	const ref = useRef<ReactQuill>(null);
	const dispatch = useReduxDispatch();
	const next = () => {
		// if (!value) {
		// 	message.error("Content cannot empty");
		// 	return;
		// }
		const editor = ref.current?.getEditor();
		if (editor) {
			const delta = editor.getContents();

			var converter = new QuillDeltaToHtmlConverter(delta.ops as any);

			var html = converter.convert();

			dispatch(
				updateNewPost({
					content: html,
				})
			);
		}
		dispatch(createPost({}));
		dispatch(nextStep());
	};

	const prev = () => {
		dispatch(prevStep());
	};

	return (
		<div className="step-two">
			<div className="editor">
				<ReactQuill
					ref={ref}
					modules={modules}
					theme="snow"
					// value={value}
					// onChange={setValue}
				/>
			</div>
			<div className="button-form">
				<ButtonCommon onClick={prev} size="small">
					Previous
				</ButtonCommon>
				<ButtonCommon type="primary" onClick={next} size="small">
					Next
				</ButtonCommon>
			</div>
		</div>
	);
};

export default StepTwo;
