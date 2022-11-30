import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useReduxDispatch } from "src/redux/redux-hook";
import {
	nextStep,
	prevStep,
	updateNewPost,
} from "src/redux/slice/NewPostSlice";
// import parse from "html-react-parser";
import "./StepTwo.scss";
import { createPost } from "../../../redux/slice/PostSlide";
import { quillModules } from "src/utils/contants";
import { ButtonCommon } from "src/common";

type Props = {};

const StepTwo = (props: Props) => {
	const [error, setError] = useState(false);
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

			if (html !== "<p><br/></p>") {
				dispatch(
					updateNewPost({
						content: html,
					})
				);
				dispatch(createPost({}));
				dispatch(nextStep());
			} else {
				setError(true);
			}
		}
	};

	const prev = () => {
		dispatch(prevStep());
	};
	const onChange = (value: string) => {
		if (value === "<p><br/></p>" && error === false) {
			setError(true);
		}
		if (value !== "<p><br/></p>" && error === true) {
			setError(false);
		}
	};

	return (
		<div className="step-two">
			<div className="editor">
				<ReactQuill
					ref={ref}
					modules={quillModules}
					theme="snow"
					// value={value}
					onChange={onChange}
				/>
			</div>
			{error && <div className="editor-error">Please input content</div>}
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
