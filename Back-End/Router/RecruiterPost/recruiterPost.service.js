const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const moment = require("moment-timezone");
BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();
// {
// 	log: [
// 		{
// 			emit: "stdout",
// 			level: "query",
// 		},
// 		{
// 			emit: "stdout",
// 			level: "error",
// 		},
// 		{
// 			emit: "stdout",
// 			level: "info",
// 		},
// 		{
// 			emit: "stdout",
// 			level: "warn",
// 		},
// 	],
// }

function exclude(obj, keys) {
	for (let key of keys) {
		delete obj[key];
	}
	return obj;
}

function arrayIntersection(arr1, arr2) {
	return arr1.filter((x) => arr2.includes(x));
}

function arrayDifference(arr1, arr2) {
	return arr1.filter((x) => !arr2.includes(x));
}

const getListPostOfUser = async (req, res) => {
	try {
		let { user_id = null, user_type_id = null } = req;
		if (!user_id) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Người dùng không hợp lệ",
			});
		}
		let resultListPost = await prisma.Recruitment_Post.findMany({
			where: {
				AND: [
					{
						recuiter_id: Number(user_id),
						is_active: true,
						is_delete: false,
					},
				],
			},
		});

		if (resultListPost && resultListPost.length < 0) {
			return res.json({
				code: 400,
				message: "Bạn chưa có danh sách bài đăng tuyển dụng",
				status_resposse: false,
			});
		}
		return res.json({
			code: 200,
			message: "Lấy danh sách bài đăng truyển dụng thành công",
			status_resposse: true,
			data: resultListPost,
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};
const getListPost = async (req, res) => {
	let {
		key_word,
		item_per_page = 10,
		page = 1,
		from_value,
		to_value,
		gender,
		is_content = false,
	} = req.query;
	try {
		let resultList = await prisma.Recruitment_Post.findMany({
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
					{
						title: { contains: key_word },
					},
					{
						from_value: {
							gte: from_value && Number(from_value),
						},
					},
					{
						to_value: {
							lte: to_value && Number(to_value),
						},
					},
					{
						gender: gender && Number(gender),
					},
					// from_value : from_value <
				],
			},
			take: Number(item_per_page),
			skip: Number(item_per_page * (page - 1)),
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
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
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
		});
		let total = await prisma.Recruitment_Post.count({
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
					{
						title: { contains: key_word },
					},
					{
						from_value: {
							gte: from_value && Number(from_value),
						},
					},
					{
						to_value: {
							lte: to_value && Number(to_value),
						},
					},
				],
			},
		});
		if (resultList && resultList.length < 0) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Lấy danh sách thất bại",
			});
		}
		const finalResult = !is_content
			? resultList.map((result) => exclude(result, ["content"]))
			: resultList;
		return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: {
				result: finalResult,
				total: total,
			},
		});
	} catch (error) {
		// console.log(error);
		// throw new Error(error);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const createPost = async (req, res) => {
	try {
		let {
			content,
			recuiter_id,
			to_value,
			from_value,
			title,
			is_active,
			is_delete,
			gender,
			list_job_type = [],
			list_major = [],
		} = req.body;
		let { user_id = null, user_type_id = null } = req;
		if (!user_id) {
			return res.json({
				code: 400,
				message: "Người dùng không hợp lệ",
				status_resposse: false,
			});
		}
		let list_job_type_array = list_job_type
			? list_job_type.map(({ job_type_id }) => {
					return {
						is_delete: false,
						is_active: true,
						job_type: {
							connect: {
								id: Number(job_type_id),
							},
						},
					};
			  })
			: [];

		let list_major_array = list_major
			? list_major.map(({ majors_id }) => {
					return {
						is_delete: false,
						is_active: true,
						majors: {
							connect: {
								id: Number(majors_id),
							},
						},
					};
			  })
			: [];

		const result = await prisma.Recruitment_Post.create({
			data: {
				content: content,
				title: title,
				recuiter_id: Number(user_id),
				to_value: Number(to_value),
				from_value: Number(from_value),
				create_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				gender: Number(gender),
				is_active: is_active,
				is_delete: is_delete,
				post_job_types: {
					create: list_job_type_array,
				},
				post_majors: {
					create: list_major_array,
				},
			},
		});

		if (!result) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Tạo bài đăng thất bại",
			});
		}
		return res.json({
			code: 200,
			message: "Tạo bài đăng thành công",
			status_resposse: true,
			data: result,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const update = async (req, res) => {
	try {
		let {
			post_id,
			content,
			recuiter_id,
			to_value,
			from_value,
			title,
			is_active,
			is_delete,
			gender,
			list_job_type = [],
			list_major = [],
		} = req.body;
		let { user_id = null, user_type_id = null } = req;
		let isExists = await prisma.Recruitment_Post.findFirst({
			where: {
				AND: [
					{
						id: Number(post_id),
						is_active: is_active,
						is_delete: is_delete,
						recuiter_id: Number(user_id),
					},
				],
			},
			include: {
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
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy bài đăng này",
			});
		}
		//major processing
		const oldMajor = isExists.post_majors.map((post_majors) =>
			Number(post_majors.majors.id)
		);
		const newMajor = list_major.map((item) => Number(item.majors_id));
		const deleteMajor = arrayDifference(oldMajor, newMajor);
		const updateOrCreateMajor = arrayDifference(newMajor, oldMajor);

		const upsertMajor = updateOrCreateMajor.map((majors_id) => {
			return {
				where: {
					majors_id: Number(majors_id),
					post_id: Number(post_id),
				},
				update: {
					is_delete: false,
					is_active: true,
				},
				create: {
					is_delete: false,
					is_active: true,
					majors: {
						connect: {
							id: Number(majors_id),
						},
					},
				},
			};
		});
		//end major processing
		//job type processing
		const oldJobType = isExists.post_job_types.map((post_job_type) =>
			Number(post_job_type.job_type.id)
		);
		const newJobType = list_job_type.map((item) =>
			Number(item.job_type_id)
		);
		const deleteJobType = arrayDifference(oldJobType, newJobType);
		const updateOrCreateJobType = arrayDifference(newJobType, oldJobType);
		const upsertJobType = updateOrCreateJobType.map((job_type_id) => {
			return {
				where: {
					job_type_id: Number(job_type_id),
					post_id: Number(post_id),
				},
				update: {
					is_delete: false,
					is_active: true,
				},
				create: {
					is_delete: false,
					is_active: true,
					job_type: {
						connect: {
							id: Number(job_type_id),
						},
					},
				},
			};
		});
		//end job type processing

		const resultUpdate = await prisma.Recruitment_Post.update({
			where: {
				id: Number(post_id),
			},
			data: {
				title: title,
				content: content,
				to_value: Number(to_value),
				from_value: Number(from_value),
				update_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				update_user: user_id,
				gender: Number(gender),
				post_job_types: {
					updateMany: {
						where: {
							job_type_id: { in: deleteJobType },
							post_id: Number(post_id),
						},
						data: {
							is_delete: true,
							is_active: false,
						},
					},
					upsert: upsertJobType,
				},
				post_majors: {
					updateMany: {
						where: {
							majors_id: { in: deleteMajor },
							post_id: Number(post_id),
						},
						data: {
							is_delete: true,
							is_active: false,
						},
					},
					upsert: upsertMajor,
				},
			},
		});

		if (!resultUpdate) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Cập nhật bài đăng thất bại",
			});
		}

		return res.json({
			code: 200,
			message: "Cập nhật bài đăng thành công",
			status_resposse: true,
			data: resultUpdate,
		});
	} catch (error) {
		console.log(error);
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const deletePost = async (req, res) => {
	try {
		let { post_id } = req.body;
		let { user_id = null, user_type_id = null } = req;
		let isExists = await prisma.Recruitment_Post.findFirst({
			where: {
				AND: [
					{
						id: Number(post_id),
						is_active: true,
						is_delete: false,
						recuiter_id: Number(user_id),
					},
				],
			},
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy bài đăng này",
			});
		}

		const resultDelete = await prisma.Recruitment_Post.update({
			where: {
				id: Number(post_id),
			},
			data: {
				is_active: false,
				is_delete: true,
				delete_date: new Date(moment(new Date()).format("YYYY-MM-DD")),
				delete_user: user_id,
				History_Apply_Job : {
					updateMany : {
						where : {
							post_id : Number(post_id)
						},
						data : {
							is_delete : true,
							is_active : false
						}
					}
				}
			},
		});
		if (!resultDelete) {
			return res.json({
				code: 400,
				status_resposse: false,
				messsage: "Xóa bài viết thất bại",
			});
		}

		return res.json({
			code: 200,
			status_resposse: true,
			data: resultDelete,
			message: "Xóa bài đăng thành công",
		});
	} catch (error) {
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
	}
};

const getDetail = async (req, res) => {
	try {
		let { post_id } = req.query;
		let isExists = await prisma.Recruitment_Post.findFirst({
			where: {
				AND: [
					{
						id: Number(post_id),
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
						province_code: true,
						district_code: true,
						ward_code: true,
					},
				},
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
		});
		if (!isExists) {
			return res.json({
				code: 400,
				status_resposse: false,
				message: "Không tìm thấy bài đăng này",
			});
		}

		return res.json({
			code: 200,
			message: "Lấy danh sách bài đăng truyển dụng thành công",
			status_resposse: true,
			data: isExists,
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
	update,
	createPost,
	getListPost,
	getListPostOfUser,
	deletePost,
	getDetail,
};
