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

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const getListResume = async (req, res) => {
	try {
		let { user_id = null, user_type_id = null } = req;
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
		let { id_cv } = req.body;
		let { user_id, user_type_id = null } = req;
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
		const resultDelete = await prisma.cv.update({
			where: {
				id: Number(id_cv),
			},
			data: {
				is_delete: true,
				is_active: false,
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
			message: "Tài khoản không tồn tại , vui lòng thử lại sau !",
		});
	}
};

const downloadCV = async (req, res) => {
	try {
		let { id_cv } = req.body;

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
			"attachment;filename=" + isExists.file_name_hash
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

// let newFileName =encodeURIComponent(nameConvert);

// res.setHeader('Content-Disposition',  'attachment;filename='+ newFileName);
// res.setHeader('Content-Type', `${file_mime}`);

// let pathURL = `${config.domain_cdn}${file_url}`;
// https.get(pathURL, (stream) => {
//     stream.pipe(res);
// });

module.exports = {
	getListResume,
	createCV,
	updateCV,
	deleteCV,
	downloadCV,
};
