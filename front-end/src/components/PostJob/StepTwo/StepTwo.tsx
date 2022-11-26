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
import { quillModules } from "src/utils/contants";

type Props = {};

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
					modules={quillModules}
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
