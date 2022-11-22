const { PrismaClient, prisma } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const { use } = require("../Resume/resume.route");
BigInt.prototype.toJSON = function () {
	return this.toString();
};

const getListPostOfUser = async (req , res) =>{
    try{
        let { user_id = null, user_type_id = null } = req;
        if(!user_id){
            return res.json({
                code : 400,
                status_resposse : false,
                message : "Người dùng không hợp lệ"
            })
        }
        let resultListPost = await prisma.Recruitment_Post.findMany({
            where : {
                AND : [
                    {
                        recuiter_id : Number(user_id),
                        is_active : true,
                        is_delete : false,
                    }
                ]
            }
        })

        if(resultListPost && resultListPost.length < 0){
            return res.json({
                code : 400 ,
                message : "Bạn chưa có danh sách bài đăng tuyển dụng",
                status_resposse: false,
            })
        }
        return res.json({
            code : 200 ,
            message : "Lấy danh sách bài đăng truyển dụng thành công",
            status_resposse: true,
            data : resultListPost
        });
    }catch(error){
        return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
    }
}
const getListPost = async (req, res) =>{
    try{
        let resultList = await prisma.Recruitment_Post.findMany({});
        if(resultList && resultList.length < 0){
            return res.json({
                code: 400,
                status_resposse: false,
                message: error.message,
            });
        }
        return res.json({
			code: 200,
			message: "Lấy danh sách thành công",
			status_resposse: true,
			data: resultList,
		});
    }catch(error){
        return res.json({
            code : 400,
            message : "Lấy danh sách bài viết thất bại"
        })
    }
}

const createPost = async (req,res)=>{
    try{
        let {
            content,
            recuiter_id,
            to_value,
            from_value,
            title,
            is_active,
            is_delete,
        } = req.body
    let { user_id = null, user_type_id = null } = req;
    if(!user_id){
        return res.json({
            code : 400,
            message : "Người dùng không hợp lệ",
            status_resposse: false,
        })
    }

    const result = await prisma.Recruitment_Post.create({
        data : {
            content : content,
            title : title,
            user : {
                recuiter_id : Number(user_id)
            },
            to_value : Number(to_value),
            from_value : Number(from_value),
            is_active : is_active,
            is_delete : is_delete
        }
    })
        if(!result){
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

    }catch(error){
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
    }
}

const update = async (req, res) =>{
    try{    
        let {
            post_id,
            content,
            recuiter_id,
            to_value,
            from_value,
            title,
            is_active,
            is_delete,
        } = req.body
    let { user_id = null, user_type_id = null } = req;
    let isExists = await prisma.Recruitment_Post.findFirst({
        where :{
            AND : [
                {
                    id : Number(post_id),
                    is_active : is_active,
                    is_delete : is_delete
                }
            ]
        }
    })
    if(!isExists){
        return res.json({
            code : 400 , 
            status_resposse: false,
            message: "Không tìm thấy bài đăng này",
        })
    }
    const resultUpdate = await prisma.Recruitment_Post.update({
        where: {
            id : Number(post_id)
        },
        data : {
            title : title,
            content : content,
            to_value : Number(to_value),
            from_value : Number(from_value),
        }
    })

    if(!resultUpdate){
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

    }catch(error){
		return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
    }
}


const deletePost = async (req,res)=> {
    try{
        let {
            post_id
        } = req.body
        let isExists = await prisma.Recruitment_Post.findFirst({
            where :{
                AND : [
                    {
                        id : Number(post_id),
                        is_active : is_active,
                        is_delete : is_delete
                    }
                ]
            }
        })
        if(!isExists){
            return res.json({
                code : 400 , 
                status_resposse: false,
                message: "Không tìm thấy bài đăng này",
            })
        }

        const resultDelete = await prisma.Recruitment_Post.update({
            where: {
                id : Number(post_id)
            },
            data : {
                is_active : false,
                is_delete : true
            }
        })
        if(!resultDelete){
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

    }catch(error){
        return res.json({
			code: 400,
			status_resposse: false,
			message: error.message,
		});
    }
}
module.exports = {
    update,
    createPost,
    getListPost,
    getListPostOfUser,
    deletePost

}