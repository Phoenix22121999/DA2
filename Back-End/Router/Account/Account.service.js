const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

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
        first_name:result.first_name,
        last_name: result.last_name,
        full_name: result.full_name,
        email: result.email,
	};
	return obj;
};

const getListAcccount = async (req, res) => {
	try {
		const listAccount = await prisma.user_Account.findMany();
		res.json({
			code: 200,
			message: "get list account",
			data: listAccount,
		});
	} catch (error) {
		return res.json({
			code: 400,
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
		// Nếu không có kết quả trả về là không tồn tại tài khoản này
		if (!resultSignIn && !resultSignIn.length) {
			return res.json({
				code: 404,
				message: "Không tìm thấy tài khoản này",
			});
		} else {
			// Nếu có trùng tên tài khoản thì so sanh mật khẩu vừa nhập với mật khẩu đã hash lưu vào database
			let verify = bcrypt.compareSync(password, resultSignIn[0].password);
			if (verify) {
				let obj = formatObj((resultSignIn[0] || {}));
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
					age: age,
					gender: gender,
					address: address,
					city_id: city_id,
					district_id: district_id,
					ward_id: ward_id,
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
					message: "Đăng nhập thất bại vui lòng thử lại !",
				});
			}
			let obj = formatObj((requestCreate || {}))
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
			message: error.message,
		});
	}
};

const update = async (req,res) => {
	try{
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
			city_id,
			district_id,
			ward_id,
			logo,
			avartar
		} = req.body;
		// console.log(req.id)
		let {user_id , user_type_id = null} = req;
		let isExists = await prisma.user_Account.findMany({
			where: {
					username: username,
			},
		});

		if ((isExists.length > 0)) {
			const requestUpdate = await prisma.user_Account.update({
				where : {
					id  :Number(user_id), 
				},
				data: {
					first_name: first_name,
					last_name: last_name,
					full_name: full_name,
					email: email,
					number_phone: number_phone,
					age: age,
					gender: gender,
					address: address,
					city_id: city_id,
					district_id: district_id,
					ward_id: ward_id,
					avartar: avartar,
					logo: logo,
				},
			})
			// console.log(requestUpdate);
			if(!requestUpdate){
				return res.json({
					code: 400,
					status_resposse: false,
					message: "Cập nhật tài khoản thất bại !",
				});
			}
			return res.json({
				code: 200,
				status_resposse: true,
				message: "Cập nhật tài khoản thành công",
			});
		}else{
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Tài khoản không tồn tại , vui lòng thử lại sau !",
			});
		}

	}catch(error){
		return res.json({
			code: 400,
			message: error.message,
		});
	}
}

const changePassword = async (req, res) =>{
	try{
		let {
			current_password,
			new_password,		
		} = req.body;

		let {user_id = null , user_type_id} = req;

		let isExists = await prisma.user_Account.findFirst({
            where :{
                AND : [{
                    id : Number(user_id),
                    is_active : true,
                    is_delete : false
                }]

            }
        })
		if(!isExists){
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
				where : {
					id  :Number(user_id), 
				},
				data: {
					password : passHash
				},
			})
			if(!requestChangePass){
				return res.json({
					code: 500,
					status_resposse: false,
					message: "Thay đổi mật khẩu thất bại!",
				});
			}

			let obj = formatObj((isExists || {}));
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
	}catch(error){
		console.log(error)
		return res.json({
			code: 400,
			message: error.message,
		});
	}
}

module.exports = {
	getListAcccount,
	signIn,
	signUp,
	update,
	changePassword
};
