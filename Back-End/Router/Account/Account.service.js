const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { OAuth2Client } = require("google-auth-library");

BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const formatObj = (result) => {
	let obj = {
		id: result.id,
		username: result.username,
		//   name: result[0].name,
		//   email: result[0].email,
		user_id: result.user_id,
		user_type_id: result.user_type_id,
		first_name: result.first_name,
		last_name: result.last_name,
		full_name: result.full_name,
		email: result.email,
		number_phone: result.number_phone,
		age: result.age,
		avartar: result.avartar,
		address: result.address,
		gender: result.gender,
		province_code: result.province_code,
		district_code: result.district_code,
		ward_code: result.ward_code,
		google_id: result.google_id,
	};
	return obj;
};

const getListAcccount = async (req, res) => {
	try {
		const listAccount = await prisma.user_Account.findMany({
			include: {
				user_type: true,
			},
		});
		res.json({
			code: 200,
			status_resposse: true,
			message: "get list account",
			data: listAccount,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
// Đăng nhập
const signIn = async (req, res) => {
	let { user_name, password } = req.body;
	try {
		// Tìm trong bảng với prisma với điều kiện trùng tên tài khoản để lấy được mật khẩu khi hash
		const resultSignIn = await prisma.user_Account.findMany({
			where: {
				username: user_name,
			},
		});
		// console.log(resultSignIn[0]);
		// Nếu không có kết quả trả về là không tồn tại tài khoản này
		if (!resultSignIn && !resultSignIn.length) {
			return res.json({
				code: 404,
				status_resposse: false,
				message: "Không tìm thấy tài khoản này",
			});
		} else {
			// Nếu có trùng tên tài khoản thì so sanh mật khẩu vừa nhập với mật khẩu đã hash lưu vào database
			let verify = bcrypt.compareSync(password, resultSignIn[0].password);
			if (verify) {
				let obj = formatObj(resultSignIn[0] || {});
				// Trả về token để dùng cho các thao tác khác trong quá trình sử dụng website
				const AccessToken = jwt.sign(
					// { UserId: obj.id, role: obj.user_type_id },
					obj,
					process.env.ACCESS_TOKEN
				);
				const test = jwt.verify(
					// { UserId: obj.id, role: obj.user_type_id },
					AccessToken,
					process.env.ACCESS_TOKEN
				);
				return res.json({
					code: 200,
					status_resposse: true,
					message: "Đăng nhập thành công",
					data: obj,
					AccessToken: AccessToken,
				});
			} else {
				return res.json({
					code: 500,
					status_resposse: false,
					message: "Đăng nhập thất bại vui lòng thử lại !",
				});
			}
		}
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

// Đăng nhập
const signInWithToken = async (req, res) => {
	let { user_id } = req;
	try {
		// Tìm trong bảng với prisma với điều kiện trùng tên tài khoản để lấy được mật khẩu khi hash
		const resultSignIn = await prisma.user_Account.findMany({
			where: {
				id: Number(user_id),
			},
		});
		// Nếu không có kết quả trả về là không tồn tại tài khoản này
		if (!resultSignIn && !resultSignIn.length) {
			return res.json({
				code: 404,
				message: "Không tìm thấy tài khoản này",
			});
		} else {
			// Nếu có trùng tên tài khoản thì so sanh mật khẩu vừa nhập với mật khẩu đã hash lưu vào database

			let obj = formatObj(resultSignIn[0] || {});
			// Trả về token để dùng cho các thao tác khác trong quá trình sử dụng website
			const AccessToken = jwt.sign(
				// { UserId: obj.id, role: obj.user_type_id },
				obj,
				process.env.ACCESS_TOKEN
			);

			return res.json({
				code: 200,
				status_resposse: true,
				message: "Đăng nhập thành công",
				data: obj,
				AccessToken: AccessToken,
			});
		}
	} catch (error) {
		return res.json({
			code: 400,
			message: error.message,
		});
	}
};

const signUp = async (req, res) => {
	try {
		const {
			password,
			username,
			google_id,
			user_type_id,
			first_name,
			last_name,
			full_name,
			email,
			number_phone,
			age,
			gender,
			address,
			city_id,
			district_id,
			ward_id,
			avartar,
			user_type,
			logo,
		} = req.body;
		const passHash = createPassHash(password);
		const uuid = uuidv4();

		let isExists = await prisma.user_Account.findMany({
			where: {
				username: username,
			},
		});
		// Kiểm tra xem tài khoản đã tồn tại hay chưa
		if (!(isExists.length > 0)) {
			const requestCreate = await prisma.user_Account.create({
				data: {
					username: username,
					password: passHash,
					is_active: true,
					is_delete: false,
					// user_type_id : user_type.user_type_id,
					user_type: {
						id: Number(user_type_id),
					},
					// user_type:
					user_type_id: Number(user_type_id),
					first_name: first_name,
					last_name: last_name,
					full_name: full_name,
					email: email,
					number_phone: number_phone,
					age: age && Number(age),
					gender: gender && Number(gender),
					address: address,
					city_id: city_id && Number(city_id),
					district_id: district_id && Number(district_id),
					ward_id: ward_id && Number(ward_id),
					avartar: avartar,
					user_type: user_type,
					logo: logo,
				},
			});
			// Kiểm tra quá trình đăng kí tài khoản có được hay không
			if (requestCreate && requestCreate.length < 0) {
				return res.json({
					code: 400,
					status_resposse: false,
					message: "Đăng kí thất bại vui lòng thử lại !",
				});
			}
			let obj = formatObj(requestCreate || {});
			const AccessToken = jwt.sign(obj, process.env.ACCESS_TOKEN);

			return res.json({
				code: 200,
				status_resposse: true,
				message: "Đăng kí và đăng nhập thành công",
				data: obj,
				AccessToken: AccessToken,
			});
		}
		return res.json({
			code: 400,
			status_resposse: false,
			message: "Tài khoản đã tồn tại , vui lòng thử lại sau !",
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

const update = async (req, res) => {
	try {
		const {
			username,
			first_name,
			last_name,
			full_name,
			email,
			number_phone,
			age,
			gender,
			address,
			province_code,
			district_code,
			ward_code,
			logo,
			avartar,
		} = req.body;
		let { user_id, user_type_id = null } = req;
		let isExists = await prisma.user_Account.findMany({
			where: {
				username: username,
			},
		});

		if (isExists.length > 0) {
			const requestUpdate = await prisma.user_Account.update({
				where: {
					id: Number(user_id),
				},
				data: {
					first_name: first_name,
					last_name: last_name,
					full_name: full_name,
					email: email,
					number_phone: number_phone,
					age: age && Number(age),
					gender: gender && Number(gender),
					address: address,
					province_code: province_code,
					district_code: district_code,
					ward_code: ward_code,
					avartar: avartar,
					logo: logo,
				},
			});
			// console.log(requestUpdate);
			if (!requestUpdate) {
				return res.json({
					code: 400,
					status_resposse: false,
					message: "Cập nhật tài khoản thất bại !",
				});
			}
			return res.json({
				code: 200,
				status_resposse: true,
				data: formatObj(requestUpdate || {}),
				message: "Cập nhật tài khoản thành công",
			});
		} else {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Tài khoản không tồn tại , vui lòng thử lại sau !",
			});
		}
	} catch (error) {
		return res.json({
			code: 400,
			message: error.message,
		});
	}
};

const changePassword = async (req, res) => {
	try {
		let { current_password, new_password } = req.body;

		let { user_id = null, user_type_id } = req;

		let isExists = await prisma.user_Account.findFirst({
			where: {
				AND: [
					{
						id: Number(user_id),
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
				message: "Tài khoản không tồn tại , vui lòng thử lại sau !",
			});
		}
		let verify = bcrypt.compareSync(current_password, isExists.password);
		if (verify) {
			let passHash = createPassHash(new_password);
			const requestChangePass = await prisma.user_Account.update({
				where: {
					id: Number(user_id),
				},
				data: {
					password: passHash,
				},
			});
			if (!requestChangePass) {
				return res.json({
					code: 500,
					status_resposse: false,
					message: "Thay đổi mật khẩu thất bại!",
				});
			}

			let obj = formatObj(isExists || {});
			// Trả về token để dùng cho các thao tác khác trong quá trình sử dụng website
			const AccessToken = jwt.sign(
				// { UserId: obj.id, role: obj.user_type_id },
				obj,
				process.env.ACCESS_TOKEN
			);
			return res.json({
				code: 200,
				status_resposse: true,
				message: "Thay đổi mật khẩu thành công",
				data: obj,
				AccessToken: AccessToken,
			});
		} else {
			return res.json({
				code: 500,
				status_resposse: false,
				message: "Mật khẩu hiện tại không chính xác!",
			});
		}
	} catch (error) {
		console.log(error);
		return res.json({
			code: 400,
			message: error.message,
		});
	}
};

const getDetailAccount = async (req, res) => {
	try {
		let { user_id = null, user_type_id = null } = req;
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
			},
		});
		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Lấy thông tin tài khoản thất bại",
			});
		}
		let obj = formatObj(result || {});
		return res.json({
			code: 200,
			status_resposse: true,
			message: "Lấy thông tin tài khoản",
			data: obj,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getDetailAccountWithId = async (req, res) => {
	let { user_id } = req.query;
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
			},
		});
		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Lấy thông tin tài khoản thất bại",
			});
		}
		let obj = formatObj(result || {});
		return res.json({
			code: 200,
			status_resposse: true,
			message: "Lấy thông tin tài khoản",
			data: obj,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const signInWithGoogle = async (req, res) => {
	let { token = null, is_tdtu = false, googleId = 0, user_type } = req.body;
	const client = new OAuth2Client(process.env.CLIENT_ID_NORMAL);
	try {
		if (!token) {
			return res.json({
				code: 400,
				message: "Vui lòng cung cấp token hợp lệ",
				status_resposse: false,
			});
		}
		const ticket = await client.verifyIdToken({
			idToken: token,
			audience: process.env.CLIENT_ID_NORMAL,
		});
		// dùng getPayload để lấy thông từ gmail
		const payload = ticket.getPayload();

		const email = payload["email"];
		let first_name = payload["given_name"];
		let last_name = payload["family_name"];
		let avartar = payload["picture"];

		let isExists = await prisma.user_Account.findFirst({
			where: {
				username: email,
			},
		});

		if (isExists) {
			let obj = formatObj(isExists);
			const AccessToken = jwt.sign(
				// { UserId: obj.id, role: obj.user_type_id },
				obj,
				process.env.ACCESS_TOKEN
			);

			return res.json({
				code: 200,
				status_resposse: true,
				message: "Đăng nhập thành công",
				data: obj,
				AccessToken: AccessToken,
			});
		}
		const passHash = createPassHash(googleId);
		let user_type_id = (is_tdtu = true ? 2 : 3);
		const resultCreate = await prisma.user_Account.create({
			data: {
				username: email,
				password: passHash,
				is_active: true,
				is_delete: false,
				// user_type_id : user_type.user_type_id,
				user_type: {
					id: Number(user_type_id),
				},
				// // user_type:
				user_type_id: Number(user_type_id),
				first_name: first_name || "",
				last_name: last_name || "",
				google_id: googleId,
				email: email,
				avartar: avartar,
				user_type: user_type,
				logo: logo,
			},
		});
		if (!resultCreate) {
			return res.json({
				code: 400,
				status_resposse: false,
				message:
					"Đăng kí/Đăng nhập với gmail thất bại vui lòng thử lại !",
			});
		}
		let obj = formatObj(resultCreate || {});
		const AccessToken = jwt.sign(obj, process.env.ACCESS_TOKEN);

		return res.json({
			code: 200,
			status_resposse: true,
			message: "Đăng kí và đăng nhập thành công với gmail",
			data: obj,
			AccessToken: AccessToken,
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
	getListAcccount,
	signIn,
	signInWithToken,
	signUp,
	update,
	changePassword,
	getDetailAccount,
	signInWithGoogle,
	getDetailAccountWithId,
};
