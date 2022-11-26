import { Form, message } from "antd";
import React, { useRef } from "react";
import ReactQuill from "react-quill";
import { GENDER_OPTION, quillModules, ROUTE } from "src/utils/contants";
import { sliderFormatter } from "src/utils/function";
import InputCommon from "../InputCommon/InputCommon";
import { NewPostFormStepOne, salaryMarks } from "../PostJob/StepOne/StepOne";
import SelectCommon from "../SelectCommon/SelectCommon";
import { RangeSliderCommon } from "../SliderCommon/SliderCommon";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import { selectEditostData } from "src/redux/slice/EditPostSlice";
import ButtonCommon from "../ButtonCommon/ButtonCommon";
import "./EditPost.scss";
import { updatePost } from "src/redux/slice/PostSlide";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { CallbackFunction } from "src/types/UtilType";
import { useNavigate } from "react-router-dom";
type Props = {};

const EditPost = (props: Props) => {
	const [form] = Form.useForm<NewPostFormStepOne>();
	const ref = useRef<ReactQuill>(null);
	const editPost = useReduxSelector(selectEditostData);
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();
	const callback: CallbackFunction = (isSuccess) => {
		if (isSuccess) {
			message.success("Update post success");
		} else {
			message.error("Update post fail");
		}
		navigate(ROUTE.RECRUITER_JOB_MANAGER);
	};
	const handleUpdate = async (e: React.MouseEvent<HTMLElement>) => {
		e.preventDefault();
		const value = await form.validateFields();
		const editor = ref.current?.getEditor();
		if (editor) {
			const delta = editor.getContents();
			var converter = new QuillDeltaToHtmlConverter(delta.ops as any);
			var html = converter.convert();
			if (editPost?.id) {
				dispatch(
					updatePost({
						payload: {
							post_id: editPost.id,
							title: value.title,
							from_value: value.salary[0],
							to_value: value.salary[1],
							content: html,
						},
						callback,
					})
				);
			}
		}
	};
	return (
		<div className="edit-post">
			<Form<NewPostFormStepOne>
				form={form}
				layout="vertical"
				initialValues={{
					title: editPost?.title,
					salary: [editPost?.from_value, editPost?.to_value],
				}}
			>
				<Form.Item
					label="Title"
					name={"title"}
					rules={[{ required: true, message: "Title is required" }]}
				>
					<InputCommon />
				</Form.Item>
				{/* <Form.Item label="Category">
					<SelectCommon data={test} />
				</Form.Item> */}
				<Form.Item label="Gender">
					<SelectCommon data={GENDER_OPTION} />
				</Form.Item>

				<Form.Item name="salary" label="Salary">
					<RangeSliderCommon
						marks={salaryMarks}
						min={0}
						max={50000000}
						range
						step={500000}
						tooltip={{ formatter: sliderFormatter }}
					/>
				</Form.Item>

				<Form.Item label="Content">
					<ReactQuill
						ref={ref}
						modules={quillModules}
						theme="snow"
						defaultValue={editPost?.content}
					/>
				</Form.Item>
			</Form>
			<div className="button-form">
				<ButtonCommon size="small" onClick={handleUpdate}>
					Update
				</ButtonCommon>
			</div>
		</div>
	);
};

export default EditPost;
