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
const { resolveSoa } = require("dns");

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
				History_Apply_Job : {
					updateMany : {
						where : {
							cv_id : Number(cv_id)
						},
						data : {
							is_delete: true,
							is_active: false,
							delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),

						}
					}
				}
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
		let  id_cv = req.params.file_id;
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

const applyCV = async (req , res) => {
	try{
		let { cv_id , post_id} = req.body;
		let { user_id, user_type_id = null } = req;

		let iscvTrue = await prisma.cv.findFirst({
			where : {
				AND: [{
					is_active : true,
					is_delete : false,
					user_id : Number(user_id)
				}]
			}
		})

		if(!iscvTrue){
			return res.json({
				code : 400 ,
				message : "Bạn không sử dụng cv này được"
			})
		}

		let isExists = await prisma.history_Apply_Job.findFirst({
			where : {
				AND : [{
					post_id : Number(post_id),
					cv_id : Number(cv_id),
					user_id : Number(user_id)
			}]},
		})

		if(isExists){
			let {is_active = true , is_delete = false} = isExists;
			if(is_active == true && is_delete == false){
				return res.json({
					code : 400,
					status_resposse : false,
					message : "Bạn đã ứng tuyển vào bài đăng này rồi"
				})
			}else{
				const resultUpdate = await prisma.history_Apply_Job.update({
					where : {
						id : Number(isExists.id)
					},
					data : {
						is_active : true,
						is_delete : false
					}
				})
				return res.json({
					code : 200,
					status_resposse : true,
					message : "Bạn đã ứng tuyển thành công 1 lần nữa"
				})
			}
		}
		const resultCreate = await prisma.history_Apply_Job.create({
			data : {
				user_id : Number(user_id),
				post_id : Number(post_id),
				cv_id : Number(cv_id),
				create_date : new Date(moment(new Date()).format("YYYY-MM-DD")),
				create_user : user_id
			}
		})

		if(!resultCreate){
			return res.json({
				code : 400 ,
				status_resposse: false,
				message : "Quá trình ứng tuyển xảy ra vấn đề vui lòng thử lại sau"
			})
		}
		return res.json({
			code : 200 ,
			status_resposse: true,
			data : resultCreate,
			message : "Quá trình ứng tuyển thành công"
		})

	}catch(error){
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
}

const unApplyCV = async(req , res) =>{
	try{
		let { cv_id , post_id} = req.body;
		let { user_id, user_type_id = null } = req;

		let iscvTrue = await prisma.cv.findFirst({
			where : {
				AND: [{
					is_active : true,
					is_delete : false,
					user_id : Number(user_id)
				}]
			}
		})

		if(!iscvTrue){
			return res.json({
				code : 400 ,
				message : "Bạn không được sử dụng cv này. Vui lòng thử lại sau"
			})
		}



		let isExists = await prisma.history_Apply_Job.findFirst({
			where : {
				AND : [{
					cv_id : Number(cv_id),
					post_id : Number(post_id),
					user_id : Number(user_id),
					is_active : true,
					is_delete : false
				}]
			}
		})

		if(!isExists){
			return res.json({
				code : 400 ,
				status_resposse : false,
				message : "Không tìm thấy lịch sử "
			})
		}
		const resulUnApplyCv = await prisma.history_Apply_Job.update({
			where : {
				id : Number(isExists.id)
			},
			data : {
				is_active : false,
				is_delete : true,
				delete_date : new Date(moment(new Date()).format("YYYY-MM-DD")),
			}
		})

		if(!resulUnApplyCv){
			return res.json({
				code : 400,
				status_resposse : false,
				message : "Rút hồ sơ ứng tuyển không thành công"
			})
		}



		return res.json({
			code : 200,
			status_resposse : true,
			message : "Rút hồ sơ ứng tuyển thành công",
			data : resulUnApplyCv
		})		
	}catch(error){
		
		return res.json({
			code: 400,
			status_resposse: false,
			messsage: error.message,
		});
	}
}

const getHistory = async (req ,res ) => {
	try{
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
		const result =  await prisma.history_Apply_Job.findMany({
			where : {
				AND : [{
					is_active : {equals : true},
					is_delete : {equals : false},
					user_id : Number(user_id)
				}]
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account : {
					select : {
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
				Recruitment_Post : {
					select : {
						id : true,
						content : true,
						title : true,
					},
					select : {
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
					}
				},
				cv : {
					select : {
						id : true,
						file_name_hash : true,
						file_name : true,
						extname : true,
						is_active : true,
						is_delete : true
					},
				}
				
			}
		})

		return res.json({
			code : 200,
			message : "Lấy dữ liệu thành công",
			status_resposse : true,
			data : result
		})

	}catch(error){
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
}


const getHistoryApplier = async (req ,res ) => {
	try{
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
			where : {
				AND : [{
					is_active : true,
					is_delete : false,
					user : {
						id :  Number(user_id)
					}
				}]
			}
		})

		if(!is_view_history){
			return res.json({
				code: 400,
				status_resposse : false,
				message : "Bạn không thể xem lịch sử của bài tuyển dụng này"
			})
		}
		// is_view_history

		const result =  await prisma.history_Apply_Job.findMany({
			where : {
				AND : [{
					is_active : {equals : true},
					is_delete : {equals : false},
					Recruitment_Post : {
						user : {
							id :  Number(user_id)
						}
					}
				}]
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
			include: {
				user_account : {
					select : {
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
				Recruitment_Post : {
					select : {
						id : true,
						content : true,
						title : true,
					},
					select : {
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
				cv : {
					select : {
						id : true,
						file_name_hash : true,
						file_name : true,
						extname : true,
						is_active : true,
						is_delete : true
					},
				}
				
			}
		})

		return res.json({
			code : 200,
			message : "Lấy dữ liệu thành công",
			status_resposse : true,
			data : result
		})

	}catch(error){
		console.log(error.message);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
}



module.exports = {
	getListResume,
	createCV,
	updateCV,
	deleteCV,
	downloadCV,
	applyCV,
	unApplyCV,
	getHistory,
	getHistoryApplier
};
