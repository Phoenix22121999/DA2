const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { validationResult } = require("express-validator");
const moment = require("moment-timezone");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { response } = require("express");
const path = require("path");
const http = require("http");
const { sendMail, write } = require("../Mail/mail.service");
const AccountService = require("../Account/Account.service");
const fs = require("fs");
const uuidv1 = require("uuid");

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const getListResumeAll = async (req, res) => {
	try {
		let { user_id = null, user_type_id = null } = req;
		let resultListResume = await prisma.cv.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
					},
				],
			},
			include: {
				user: {
					select: {
						id: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						avartar: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
			},
		});

		const total = await prisma.cv.count({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		if (resultListResume && resultListResume.length < 0) {
			return res.json({
				code: 400,
				message: "Bạn chưa có danh sách CV",
				status_resposse: false,
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			total: total,
			data: resultListResume,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getListResume = async (req, res) => {
	try {
		let { user_id = null, user_type_id = null } = req;
		if(!user_id){
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}
		let resultListResume = await prisma.cv.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user_id : Number(user_id)
					},
				],
			},
		});
		if (resultListResume && resultListResume.length < 0) {
			return res.json({
				code: 400,
				message: "Bạn chưa có danh sách CV",
				status_resposse: false,
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: resultListResume,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getListResumeById = async (req, res) => {
	try {
		let { user_id } = req.query;
		if (!user_id) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Người dùng không hợp lệ",
			});
		}
		let resultListResume = await prisma.cv.findMany({
			where: {
				AND: [
					{
						user_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		if (resultListResume && resultListResume.length < 0) {
			return res.json({
				code: 400,
				message: "Bạn chưa có danh sách CV",
				status_resposse: false,
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: resultListResume,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getListResumeById = async (req, res) => {
	try {
		let { user_id } = req.query;
		if (!user_id) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Người dùng không hợp lệ",
			});
		}
		let resultListResume = await prisma.cv.findMany({
			where: {
				AND: [
					{
						user_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		if (resultListResume && resultListResume.length < 0) {
			return res.json({
				code: 400,
				message: "Bạn chưa có danh sách CV",
				status_resposse: false,
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: resultListResume,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const createCV = async (req, res) => {
	try {
		let {
			file_name_hash,
			file_name,
			is_active = true,
			is_delete = false,
		} = req.body;
		let { user_id = null, user_type_id = null } = req;
		const resultCreate = await prisma.cv.create({
			data: {
				file_name_hash: file_name_hash,
				file_name: path.parse(file_name).name,
				extname: path.parse(file_name).ext,
				is_active: is_active,
				is_delete: is_delete,
				user_id: Number(user_id),
			},
		});
		if (resultCreate && resultCreate.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Tạo CV thất bại",
			});
		}

		return res.json({
			code: 200,
			message: "Tạo CV thành công",
			status_resposse: true,
			data: resultCreate,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const updateCV = async (req, res) => {
	try {
		let { id_cv, file_name_new } = req.body;
		let { user_id = null, user_type_id = null } = req;
		let isExists = await prisma.cv.findFirst({
			where: {
				AND: [
					{
						id: Number(id_cv),
						user_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy tập tin cv này",
			});
		}

		const resultUpdate = await prisma.cv.update({
			where: {
				id: Number(id_cv),
			},
			data: {
				file_name: file_name_new,
			},
		});

		if (!resultUpdate) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Cập nhật tên tập tin cv thất bại !",
			});
		}

		return res.json({
			code: 200,
			status_resposse: true,
			data: resultUpdate,
			message: "Cập nhật tập tin cv thành công",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteCV = async (req, res) => {
	try {
		let { cv_id } = req.body;
		let { user_id, user_type_id = null } = req;
		let isExists = await prisma.cv.findFirst({
			where: {
				AND: [
					{
						id: Number(cv_id),
						user_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy tập tin cv này",
			});
		}
		const resultDelete = await prisma.cv.update({
			where: {
				id: Number(cv_id),
			},
			data: {
				is_delete: true,
				is_active: false,
				History_Apply_Job: {
					updateMany: {
						where: {
							cv_id: Number(cv_id),
						},
						data: {
							is_delete: true,
							is_active: false,
							delete_date: new Date(
								moment(new Date()).format("YYYY-MM-DD")
							),
						},
					},
				},
			},
		});
		if (!resultDelete) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "xóa cv thất bại !",
			});
		}

		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa cv thành công",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const downloadCV = async (req, res) => {
	try {
		let id_cv = req.params.file_id;
		let isExists = await prisma.cv.findFirst({
			where: {
				AND: [
					{
						id: Number(id_cv),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy tập tin cv này",
			});
		}

		let newFileName = encodeURIComponent(isExists.file_name);
		res.setHeader(
			"Content-Disposition",
			"attachment;filename=" + `${newFileName}${isExists.extname}`
		);
		res.setHeader("Content-Type", `application/pdf`);

		let pathURL = `${process.env.CDN_URL}${isExists.file_name_hash}`;
		http.get(pathURL, (stream) => {
			stream.pipe(res);
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: "Tài khoản không tồn tại , vui lòng thử lại sau !",
		});
	}
};

const applyCV = async (req, res) => {
	try {
		let { cv_id, post_id } = req.body;
		let { user_id, user_type_id = null } = req;

		let iscvTrue = await prisma.cv.findFirst({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user_id: Number(user_id),
					},
				],
			},
		});

		if (!iscvTrue) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Bạn không sử dụng cv này được",
			});
		}

		let isExists = await prisma.history_Apply_Job.findFirst({
			where: {
				AND: [
					{
						post_id: Number(post_id),
						cv_id: Number(cv_id),
						user_id: Number(user_id),
					},
				],
			},
		});

		if (isExists) {
			let { is_active = true, is_delete = false } = isExists;
			if (is_active == true && is_delete == false) {
				return res.json({
					code: 400,
					status_resposse: false,
					message: "Bạn đã ứng tuyển vào bài đăng này rồi",
				});
			} else {
				const resultUpdate = await prisma.history_Apply_Job.update({
					where: {
						id: Number(isExists.id),
					},
					data: {
						is_active: true,
						is_delete: false,
					},
					include: {
						user_account: {
							select: {
								id: true,
								full_name: true,
								user_type_id: true,
								email: true,
								number_phone: true,
								logo: true,
								address: true,
								province_code: true,
								district_code: true,
								ward_code: true,
							},
						},
						Recruitment_Post: {
							select: {
								id: true,
								title: true,
								post_job_types: {
									select: {
										id: true,
										job_type: {
											select: {
												id: true,
												job_type_name: true,
											},
										},
									},
									where: {
										is_delete: false,
										is_active: true,
									},
								},
								post_majors: {
									select: {
										id: true,
										majors: {
											select: {
												id: true,
												majors_name: true,
											},
										},
									},
									where: {
										is_delete: false,
										is_active: true,
									},
								},
							},
						},
						cv: {
							select: {
								id: true,
								file_name_hash: true,
								file_name: true,
								extname: true,
								is_active: true,
								is_delete: true,
							},
						},
					},
				});

				// Lấy thông tin của user
				const { user_account } = resultUpdate;
				// Lấy thông tin bài tuyển dụng
				const { Recruitment_Post } = resultUpdate;
				// Lấy thông tin của hồ sơ ứng tuyển
				const { cv } = resultUpdate;

				sendMail("template-mail", {
					to_mail: user_account.email,
					subject: "Nộp đơn ứng tuyển thành công",
					data: {
						title: Recruitment_Post.title,
						cv_name: cv.file_name,
					},
				});

				return res.json({
					code: 200,
					status_resposse: true,
					data: resultUpdate,
					message: "Bạn đã ứng tuyển thành công 1 lần nữa",
				});
			}
		}
		const resultCreate = await prisma.history_Apply_Job.create({
			data: {
				user_id: Number(user_id),
				post_id: Number(post_id),
				cv_id: Number(cv_id),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				create_user: user_id,
			},
			include: {
				user_account: {
					select: {
						id: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		if (!resultCreate) {
			return res.json({
				code: 400,
				status_resposse: false,
				message:
					"Quá trình ứng tuyển xảy ra vấn đề vui lòng thử lại sau",
			});
		}

		// Lấy thông tin của user
		const { user_account } = resultCreate;
		// Lấy thông tin bài tuyển dụng
		const { Recruitment_Post } = resultCreate;
		// Lấy thông tin của hồ sơ ứng tuyển
		const { cv } = resultCreate;

		sendMail("template-mail", {
			to_mail: user_account.email,
			subject: "Nộp đơn ứng tuyển thành công",
			data: {
				title: Recruitment_Post.title,
				cv_name: cv.file_name,
			},
		});

		return res.json({
			code: 200,
			status_resposse: true,
			data: resultCreate,
			message: "Quá trình ứng tuyển thành công",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const unApplyCV = async (req, res) => {
	try {
		let { cv_id, post_id } = req.body;
		let { user_id, user_type_id = null } = req;

		let iscvTrue = await prisma.cv.findFirst({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user_id: Number(user_id),
					},
				],
			},
		});

		if (!iscvTrue) {
			return res.json({
				code: 400,
				message: "Bạn không được sử dụng cv này. Vui lòng thử lại sau",
			});
		}

		let isExists = await prisma.history_Apply_Job.findFirst({
			where: {
				AND: [
					{
						cv_id: Number(cv_id),
						post_id: Number(post_id),
						user_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy lịch sử ",
			});
		}
		const resulUnApplyCv = await prisma.history_Apply_Job.update({
			where: {
				id: Number(isExists.id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
			},
			include: {
				user_account: {
					select: {
						id: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		if (!resulUnApplyCv) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Rút hồ sơ ứng tuyển không thành công",
			});
		}

		return res.json({
			code: 200,
			status_resposse: true,
			message: "Rút hồ sơ ứng tuyển thành công",
			data: resulUnApplyCv,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			messsage: error.message,
		});
	}
};

const getHistory = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			is_content = false,
		} = req.query;
		let { user_id, user_type_id = null } = req;
		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						user_id: Number(user_id),
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						last_name: true,
						username: true,
						first_name: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
const getHistoryById = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			is_content = false,
			user_id,
		} = req.query;
		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						user_id: Number(user_id),
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						last_name: true,
						username: true,
						first_name: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
const getHistoryById = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			is_content = false,
			user_id,
		} = req.query;
		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						user_id: Number(user_id),
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getHistoryApplier = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			post_id,
			is_content = false,
		} = req.query;
		let { user_id, user_type_id = null } = req;
		const is_view_history = await prisma.recruitment_Post.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user: {
							id: Number(user_id),
						},
					},
				],
			},
		});

		if (!is_view_history) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Bạn không thể xem lịch sử của bài tuyển dụng này",
			});
		}
		// is_view_history

		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						Recruitment_Post: {
							user: {
								id: Number(user_id),
							},
						},
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						full_name: true,
						last_name: true,
						username: true,
						first_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						avartar: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
const getHistoryApplierById = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			post_id,
			is_content = false,
			user_id,
		} = req.query;
		const is_view_history = await prisma.recruitment_Post.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user: {
							id: Number(user_id),
						},
					},
				],
			},
		});

		if (!is_view_history) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Bạn không thể xem lịch sử của bài tuyển dụng này",
			});
		}
		// is_view_history

		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						Recruitment_Post: {
							user: {
								id: Number(user_id),
							},
						},
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						last_name: true,
						username: true,
						first_name: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
const getHistoryApplierById = async (req, res) => {
	try {
		let {
			key_word,
			item_per_page = 10,
			page = 1,
			from_value,
			to_value,
			gender,
			post_id,
			is_content = false,
			user_id,
		} = req.query;
		const is_view_history = await prisma.recruitment_Post.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
						user: {
							id: Number(user_id),
						},
					},
				],
			},
		});

		if (!is_view_history) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Bạn không thể xem lịch sử của bài tuyển dụng này",
			});
		}
		// is_view_history

		const result = await prisma.history_Apply_Job.findMany({
			where: {
				AND: [
					{
						is_active: { equals: true },
						is_delete: { equals: false },
						Recruitment_Post: {
							user: {
								id: Number(user_id),
							},
						},
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account: {
					select: {
						id: true,
						full_name: true,
						user_type_id: true,
						email: true,
						number_phone: true,
						logo: true,
						address: true,
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
				Recruitment_Post: {
					select: {
						id: true,
						content: is_content,
						title: true,
						post_job_types: {
							select: {
								id: true,
								job_type: {
									select: {
										id: true,
										job_type_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
						post_majors: {
							select: {
								id: true,
								majors: {
									select: {
										id: true,
										majors_name: true,
									},
								},
							},
							where: {
								is_delete: false,
								is_active: true,
							},
						},
					},
				},
				cv: {
					select: {
						id: true,
						file_name_hash: true,
						file_name: true,
						extname: true,
						is_active: true,
						is_delete: true,
					},
				},
			},
		});

		return res.json({
			code: 200,
			message: "Lấy dữ liệu thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const exportPDF = async (req, res) => {
	let { name_cv } = req.query;
	let { user_id } = req;
	try {
		if (!user_id) {
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}

		const result = await prisma.user_Account.findFirst({
			where: {
				id: Number(user_id),
			},
			include: {
				user_type: true,
				provinces: true,
				districts: true,
				wards: true,
				user_education: {
					select: {
						id: true,
						name_school: true,
						year_start: true,
						year_end: true,
						month_start: true,
						month_end: true,
						description: true,
						majors: true,
						is_active: true,
						is_delete: true,
					},
					where: {
						is_active: true,
						is_delete: false,
					},
				},
				user_experience: {
					select: {
						id: true,
						name_company: true,
						year_start: true,
						year_end: true,
						month_start: true,
						month_end: true,
						description: true,
						position: true,
						is_active: true,
						is_delete: true,
					},
					where: {
						is_active: true,
						is_delete: false,
					},
				},
				user_achievement: {
					select: {
						id: true,
						name_achievement: true,
						year: true,
						month: true,
						description: true,
						is_active: true,
						is_delete: true,
					},
					where: {
						is_active: true,
						is_delete: false,
					},
				},
				user_project: {
					select: {
						id: true,
						name_project: true,
						year_start: true,
						year_end: true,
						month_start: true,
						month_end: true,
						description: true,
						is_active: true,
						is_delete: true,
					},
					where: {
						is_active: true,
						is_delete: false,
					},
				},
			},
		});
		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Lấy thông tin tài khoản thất bại",
			});
		}
		// let obj = formatObj(result || {});
		// delete result.password;

		console.log(result);

		if (!name_cv) {
			let id = uuidv1.v1();
			name_cv = `cv_${moment().format("DDMMYYYY")}_${id}`;
		}

		let html = await write(
			"template-cv",
			{
				data: {
					...result,
					avatar: `${process.env.CDN_URL}/${result.avartar}`,
				},
			},
			name_cv
		);

		res.setHeader(
			"Content-Disposition",
			"attachment;filename=" + `${name_cv}.pdf`
		);
		res.setHeader("Content-Type", `application/pdf`);

		let pathURL = `${process.env.API_URL}${html}`;
		http.get(pathURL, (stream) => {
			stream.pipe(res);
			stream.pipe(res).on('error', function(e) {
				console.log('rs.pipe has error: ' + e.message)
			  });
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

module.exports = {
	getListResume,
	createCV,
	updateCV,
	deleteCV,
	downloadCV,
	applyCV,
	unApplyCV,
	getHistory,
	getHistoryApplier,
	getListResumeById,
	getHistoryApplierById,
	getHistoryById,
<<<<<<< HEAD
	getListResumeAll,
	exportPDF,
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
};
