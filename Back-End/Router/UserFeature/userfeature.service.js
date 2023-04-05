const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { validationResult } = require("express-validator");
let moment = require("moment-timezone");

moment().tz("Asia/Ho_Chi_Minh").format();

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const createUserEducation = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_school,
			year_start,
			year_end,
			description,
			majors,
			month_start,
			month_end,
		} = req.body;

		const requestCreateUserType = await prisma.user_Education.create({
			data: {
				name_school,
				year_start,
				year_end,
				month_start,
				month_end,
				description,
				majors,
				is_active: true,
				is_delete: false,
				user_id: Number(user_id),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});

		if (requestCreateUserType && requestCreateUserType.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Khởi tạo thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: false,
			data: requestCreateUserType,
			message: "Khởi tạo học vấn thành công !",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const UpdateUserEducation = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_school,
			year_start,
			year_end,
			description,
			majors,
			month_start,
			month_end,
			use_education_id,
		} = req.body;

		let isExists = await prisma.user_Education.findMany({
			where: {
				AND: [
					{
						id: Number(use_education_id),
						user_id: Number(user_id),
					},
				],
			},
		});

		if (isExists.length <= 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Học vấn không tồn tại",
			});
		}
		const requestUpdateUserType = await prisma.user_Education.update({
			where: {
				id: Number(use_education_id),
			},
			data: {
				name_school,
				year_start,
				year_end,
				month_start,
				month_end,
				description,
				majors,
				is_active: true,
				is_delete: false,
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});
		if (!requestUpdateUserType) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật ngành nghề thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "cập nhật ngành nghề thành công",
			status_resposse: true,
			data: requestUpdateUserType,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteUserEducation = async (req, res) => {
	const { use_education_id } = req.body;
	const { user_type_id, user_id } = req;
	try {
		let isExists = await prisma.user_Education.findMany({
			where: {
				AND: [
					{
						id: Number(use_education_id),
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
				message: "Học vấn không tồn tại",
			});
		}

		const resultDelete = await prisma.user_Education.update({
			where: {
				id: Number(use_education_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
			},
		});
		if (resultDelete && resultDelete.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Xóa loại học vấn thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa học vấn thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

///// Experience
const createUserExperience = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_company,
			year_start,
			year_end,
			description,
			month_start,
			position,
			month_end,
		} = req.body;

		const requestCreateUserType = await prisma.user_Experience.create({
			data: {
				name_company,
				year_start,
				year_end,
				month_start,
				month_end,
				position,
				description,
				is_active: true,
				is_delete: false,
				user_id: Number(user_id),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});

		if (requestCreateUserType && requestCreateUserType.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Khởi tạo kinh nghiệm thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: false,
			data: requestCreateUserType,
			message: "Khởi tạo kinh nghiệm thành công !",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const UpdateUserExperience = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_company,
			year_start,
			year_end,
			description,
			month_start,
			month_end,
			position,
			use_experience_id,
		} = req.body;

		let isExists = await prisma.user_Experience.findMany({
			where: {
				AND: [
					{
						id: Number(use_experience_id),
						user_id: Number(user_id),
					},
				],
			},
		});

		if (isExists.length <= 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Kinh nghiệm không tồn tại",
			});
		}
		const requestUpdateUserType = await prisma.user_Experience.update({
			where: {
				id: Number(use_experience_id),
			},
			data: {
				name_company,
				year_start,
				year_end,
				month_start,
				month_end,
				description,
				position,
				is_active: true,
				is_delete: false,
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});
		if (!requestUpdateUserType) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật kinh nghiệm thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "cập nhật kinh nghiệm thành công",
			status_resposse: true,
			data: requestUpdateUserType,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteUserExperience = async (req, res) => {
	const { use_experience_id } = req.body;
	const { user_type_id, user_id } = req;
	try {
		let isExists = await prisma.user_Experience.findMany({
			where: {
				AND: [
					{
						id: Number(use_experience_id),
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
				message: "Kinh nghiệm không tồn tại",
			});
		}

		const resultDelete = await prisma.user_Experience.update({
			where: {
				id: Number(use_experience_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
			},
		});
		if (resultDelete && resultDelete.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Xóa kinh nghiệm thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa kinh nghiệm thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

/// Achievenment

const createUserAchievement = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const { name_achievement, year, description, month } = req.body;

		const requestCreateUserType = await prisma.user_Achievement.create({
			data: {
				name_achievement,
				year,
				month,
				description,
				is_active: true,
				is_delete: false,
				user_id: Number(user_id),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});

		if (requestCreateUserType && requestCreateUserType.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Khởi tạo thành tựu thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: false,
			data: requestCreateUserType,
			message: "Khởi tạo thành tựu thành công !",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const UpdateUserAchievement = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_achievement,
			year,
			description,
			month,
			use_achievement_id,
		} = req.body;

		let isExists = await prisma.user_Achievement.findMany({
			where: {
				AND: [
					{
						id: Number(use_achievement_id),
						user_id: Number(user_id),
					},
				],
			},
		});

		if (isExists.length <= 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Thành tựu không tồn tại",
			});
		}
		const requestUpdateUserType = await prisma.user_Achievement.update({
			where: {
				id: Number(use_achievement_id),
			},
			data: {
				name_achievement,
				year,
				month,
				description,
				is_active: true,
				is_delete: false,
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});
		if (!requestUpdateUserType) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật thành tựu thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "cập nhật thành tựu thành công",
			status_resposse: true,
			data: requestUpdateUserType,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteUserAchievement = async (req, res) => {
	const { use_achievement_id } = req.body;
	const { user_type_id, user_id } = req;
	try {
		let isExists = await prisma.user_Achievement.findMany({
			where: {
				AND: [
					{
						id: Number(use_achievement_id),
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
				message: "Thành tựu không tồn tại",
			});
		}

		const resultDelete = await prisma.user_Achievement.update({
			where: {
				id: Number(use_achievement_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
			},
		});
		if (resultDelete && resultDelete.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Xóa loại tài khoản thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa thành tựu thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

// Project

const createUserProject = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_project,
			year_start,
			year_end,
			description,
			month_start,
			month_end,
		} = req.body;

		const requestCreateUserType = await prisma.user_Project.create({
			data: {
				name_project,
				year_start,
				year_end,
				month_start,
				month_end,
				description,
				is_active: true,
				is_delete: false,
				user_id: Number(user_id),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});

		if (requestCreateUserType && requestCreateUserType.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Khởi tạo thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: false,
			data: requestCreateUserType,
			message: "Khởi dự án tham gia thành công !",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const UpdateUserProject = async (req, res) => {
	const { user_type_id, user_id } = req;
	try {
		const {
			name_project,
			year_start,
			year_end,
			description,
			month_start,
			month_end,
			use_project_id,
		} = req.body;

		let isExists = await prisma.user_Project.findMany({
			where: {
				AND: [
					{
						id: Number(use_project_id),
						user_id: Number(user_id),
					},
				],
			},
		});

		if (isExists.length <= 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Dự án tham gia không tồn tại",
			});
		}
		const requestUpdateUserType = await prisma.user_Project.update({
			where: {
				id: Number(use_project_id),
			},
			data: {
				name_project,
				year_start,
				year_end,
				month_start,
				month_end,
				description,
				is_active: true,
				is_delete: false,
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD HH:mm:ss")),
			},
		});
		if (!requestUpdateUserType) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật dự án tham gia thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "cập nhật dự án tham gia thành công",
			status_resposse: true,
			data: requestUpdateUserType,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteUserProject = async (req, res) => {
	const { use_project_id } = req.body;
	const { user_type_id, user_id } = req;
	try {
		let isExists = await prisma.user_Project.findMany({
			where: {
				AND: [
					{
						id: Number(use_project_id),
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
				message: "Dự án tham gia không tồn tại",
			});
		}

		const resultDelete = await prisma.user_Project.update({
			where: {
				id: Number(use_project_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
			},
		});
		if (resultDelete && resultDelete.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Xóa loại tài khoản thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa dự án tham gia thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};




const getDataAll = async (req, res) => {
	const { use_project_id } = req.body;
	const { user_type_id, user_id } = req;
	try {
		if(user_type_id !=1){
			return res.json({
				code: 400,
				status_resposse: false,
				message: 'Người dùng không hợp lệ',
			});
		}

		const total = await prisma.user_Account.count({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		const total_type_can = await prisma.user_Account.count({
			where: {
				AND: [
					{
						user_type_id: 2,
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		const total_type_recruiter = await prisma.user_Account.count({
			where: {
				AND: [
					{
						user_type_id: 3,
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		const total_type_admin = await prisma.user_Account.count({
			where: {
				AND: [
					{
						user_type_id: 1,
						is_active: true,
						is_delete: false,
					},
				],
			},
		});


		let resultListResume = await prisma.cv.findMany({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
					},
				],
			},			include : {
				user : {
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
				}
			},
		});


		const totalResume = await prisma.cv.count({
			where: {
				AND: [
					{
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		let totalPost = await prisma.Recruitment_Post.count({
			where: {
				AND: [
					{
						is_active: {
							equals: true,
						},
					},
					{
						is_delete: {
							equals: false,
						},
					},
				],
			},
		});


		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: {
				totalResume,
				totalPost,
				// resultListResume,
				total_type_can,
				total_type_recruiter,
				total_type_admin,
			},
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
	createUserEducation,
	UpdateUserEducation,
	deleteUserEducation,

	createUserExperience,
	UpdateUserExperience,
	deleteUserExperience,

	createUserAchievement,
	UpdateUserAchievement,
	deleteUserAchievement,

	createUserProject,
	UpdateUserProject,
	deleteUserProject,

	getDataAll
	// signIn,
	// signUp,Project
};
