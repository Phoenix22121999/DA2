import { Form, message } from "antd";
import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import { GENDER_OPTION, quillModules, ROUTE } from "src/utils/contants";
import {
	formValueToCreatePostParameters,
	formValueToUpdatePostParameters,
	sliderFormatter,
} from "src/utils/function";
import { NewPostFormStepOne, salaryMarks } from "../PostJob/StepOne/StepOne";
import { useReduxDispatch, useReduxSelector } from "src/redux/redux-hook";
import {
	selectEditPostData,
	selectEditPostID,
	selectEditPostStatus,
} from "src/redux/slice/EditPostSlice";
import "./EditPost.scss";
import { getPostDetail, updatePost } from "src/redux/slice/PostSlide";
import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";
import { CallbackFunction } from "src/types/UtilType";
import { useNavigate } from "react-router-dom";
import useGetStatictisOption from "src/hooks/useGetStatictisOption";
import {
	ButtonCommon,
	InputCommon,
	LoadingCommon,
	RangeSliderCommon,
	SelectCommon,
} from "src/common";
import SuspenseLoading from "src/components/SuspenseLoading/SuspenseLoading";
type Props = {};

const EditPost = (props: Props) => {
	const [form] = Form.useForm<NewPostFormStepOne>();
	const ref = useRef<ReactQuill>(null);
	const editId = useReduxSelector(selectEditPostID);
	const editPost = useReduxSelector(selectEditPostData);
	const status = useReduxSelector(selectEditPostStatus);
	const dispatch = useReduxDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (editPost?.id !== editId) {
			dispatch(
				getPostDetail({
					payload: {
						post_id: editId,
					},
				})
			);
		}
	}, [editId, dispatch, editPost]);

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
			formValueToCreatePostParameters(value);
			if (editPost?.id) {
				dispatch(
					updatePost({
						payload: formValueToUpdatePostParameters(
							editId,
							value,
							html
						),
						callback,
					})
				);
			}
		}
	};
	const { jobTypeOption, majorOption } = useGetStatictisOption();
	useEffect(() => {
		form.setFieldsValue({
			title: editPost?.title,
			salary: [editPost?.from_value, editPost?.to_value],
			gender: editPost?.gender || 1,
			jobTypeList: editPost?.post_job_types.map(
				(post_job_type) => post_job_type.job_type.id
			),
			majorList: editPost?.post_majors.map(
				(post_majors) => post_majors.majors.id
			),
		});
	}, [editPost, form]);

	return (
		<React.Suspense fallback={<SuspenseLoading size="medium" />}>
			<div className="edit-post">
				<LoadingCommon loading={status === "loading"}>
					<Form<NewPostFormStepOne>
						form={form}
						layout="vertical"
						// initialValues={{
						// 	title: editPost?.title,
						// 	salary: [editPost?.from_value, editPost?.to_value],
						// 	gender: editPost?.gender,
						// }}
					>
						<Form.Item
							label="Title"
							name={"title"}
							rules={[
								{
									required: true,
									message: "Title is required",
								},
							]}
						>
							<InputCommon />
						</Form.Item>
						<Form.Item
							label="Job Type"
							name="jobTypeList"
							rules={[
								{
									required: true,
									message: "Job type is required",
								},
							]}
						>
							<SelectCommon
								placeholder="Please select job type"
								mode="multiple"
								data={jobTypeOption}
								allowClear
							/>
						</Form.Item>
						<Form.Item
							label="Major"
							name="majorList"
							rules={[
								{
									required: true,
									message: "Major is required",
								},
							]}
						>
							<SelectCommon
								placeholder="Please select majors"
								mode="multiple"
								data={majorOption}
								allowClear
							/>
						</Form.Item>
						<Form.Item label="Gender" name="gender">
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
							<div className="editor">
								<ReactQuill
									ref={ref}
									modules={quillModules}
									theme="snow"
									defaultValue={editPost?.content}
								/>
							</div>
						</Form.Item>
					</Form>
					<div className="button-form">
						<ButtonCommon size="small" onClick={handleUpdate}>
							Update
						</ButtonCommon>
					</div>
				</LoadingCommon>
			</div>
		</React.Suspense>
	);
};

export default EditPost;
