const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { validationResult } = require("express-validator");
const moment = require("moment-timezone");

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const createAccountType = async (req, res) => {
	try {
		let result = validationResult(req);
		if (result.errors.length !== 0) {
			let values = result.mapped();
			let mess = "";
			for (i in values) {
				mess = values[i].msg;
			}
			res.json({ code: 1, message: mess, status_resposse: false });
		}
		const { user_type_name, is_active, is_delete } = req.body;
		let isExists = await prisma.user_Type.findMany({
			where: {
				AND: [
					{
						user_type_name: user_type_name,
						is_active: true,
						is_delete: false,
					},
				],
			},
		});
		// Check tồn tại
		if (!(isExists.length > 0)) {
			const requestCreateUserType = await prisma.user_Type.create({
				data: {
					user_type_name: user_type_name,
					is_active: is_active,
					is_delete: is_delete,
					create_date: new Date(),
				},
			});
			// Check xem có tạo được không
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
				message: "Khởi tạo loại người dùng thành công !",
			});
		}
		return res.json({
			code: 400,
			status_resposse: false,
			message: "Loại người dùng đã tồn tại vui lòng thử lại !",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getListAccountType = async (req, res) => {
	try {
		const listUserAccountType = await prisma.user_Type.findMany();
		res.json({
			code: 200,
			message: "get list account",
			status_resposse: true,
			data: listUserAccountType,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deleteAccountType = async (req, res) => {
	const { user_type_id } = req.body;
	try {
		const resultDelete = await prisma.user_Type.update({
			where: {
				id: user_type_id,
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
			message: "Xóa tài loại tài khoản thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const updateAccountType = async (req, res) => {
	const { user_type_id, user_type_name, is_active, is_delete } = req.body;
	try {
		const resultDelete = await prisma.user_Type.update({
			where: {
				id: user_type_id,
			},
			data: {
				user_type_name: user_type_name,
				delete_date: null,
				update_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				is_active: is_active,
				is_delete: is_delete,
			},
		});
		if (resultDelete && resultDelete.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Cập nhật tài khoản thất bại !",
			});
		}
		return res.json({
			code: 200,
			status_resposse: true,
			message: "Cập nhật tài loại tài khoản thành công!",
		});
	} catch (error) {
		return res.json({
			code: 400,
			message: error.message,
		});
	}
};

module.exports = {
	createAccountType,
	getListAccountType,
	deleteAccountType,
	updateAccountType,
	// signIn,
	// signUp,
};
