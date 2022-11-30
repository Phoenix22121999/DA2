const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const moment = require("moment-timezone");
BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const getListJobType = async (req, res) => {
	let {
		key_word = "",
		item_per_page = 10,
		page = 1,
		from_value = 0,
		to_value = 0,
	} = req.query;

	try {
		let resultList = await prisma.job_Type.findMany({
			where: {
				AND: [
					{
						is_delete: false,
						is_active: true,
						OR: [
							{
								job_type_name: { contains: key_word },
							},
						],
					},
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
		});
		if (resultList && resultList.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Lấy danh sách loại công việc thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: resultList,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const createJobType = async (req, res) => {
	let { job_type_name = "" } = req.body;

	try {
		let { user_id = null, user_type_id = null } = req;
		if (!user_id || user_type_id != 1) {
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}

		const result = await prisma.job_Type.upsert({
			where: {
				job_type_name: job_type_name,
			},

			update: {
				is_active: true,
				is_delete: false,
			},

			create: {
				job_type_name: job_type_name,
				is_active: true,
				is_delete: false,
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				create_user: String(user_id),
			},
		});

		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Tạo loại công việc thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "Tạo bài đăng thành công",
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

const updateJobType = async (req, res) => {
	let { job_type_id, job_type_name = "" } = req.body;
	try {
		let { user_id = null, user_type_id = null } = req;
		if (!user_id || user_type_id != 1) {
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}
		const result = await prisma.job_Type.update({
			where: {
				id: Number(job_type_id),
			},
			data: {
				job_type_name: String(job_type_name),
				update_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				update_user: user_id,
			},
		});
		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật loại công việc thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "Cập nhật loại công việc thành công",
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

const deleteJobType = async (req, res) => {
	let { job_type_id } = req.body;
	try {
		let { user_id = null, user_type_id = null } = req;
		if (!user_id || user_type_id != 1) {
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}
		const result = await prisma.job_Type.update({
			where: {
				id: Number(job_type_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				delete_user: user_id,
				Recruitment_Post_Job_Type: {
					updateMany: {
						where: {
							job_type_id: Number(job_type_id),
						},
						data: {
							is_active: false,
							is_delete: true,
							delete_date: new Date(
								moment(new Date()).format("YYYY-MM-DD")
							),
							delete_user: user_id,
						},
					},
				},
			},
		});
		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "xóa loại công việc thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "xóa loại công việc thành công",
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

module.exports = {
	getListJobType,
	createJobType,
	updateJobType,
	deleteJobType,
};
