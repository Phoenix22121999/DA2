const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const moment = require("moment-timezone");
BigInt.prototype.toJSON = function () {
	return this.toString();
};

const prisma = new PrismaClient();

const getListMajor = async (req,res)=>{
    let {
        key_word  = '',
        item_per_page = 10,
        page = 1,
    } = req.query

    try{
        const resultListMajor = await prisma.majors.findMany({
            where : {
                AND : [{
                    is_active : true,
                    is_delete : false,
                    OR : [{
                        majors_name : { contains: key_word },
                    }]
                }]
            },
            take : Number(item_per_page),
            skip : Number(item_per_page * (page - 1))
        })
        return res.json({
            code : 200,
            message : "Lấy danh sách thành công",
            status_resposse : true,
            data : resultListMajor
        })
    }catch(error){
        return res.json({
            code : 400,
            status_resposse: false,
            message : error.message
        })
    }

}

const createMajor = async (req, res)=>{
    let {
        majors_name = '',
    } = req.body
    let { user_id = null, user_type_id = null } = req;
    try{
        if(!user_id){
            return res.json({
                code : 400,
                message : "Người dùng không hợp lệ",
                status_resposse: false,
            })
        }
        const result = await prisma.majors.create({
            data : {
                majors_name : majors_name,
                 is_active : true,
                 is_delete : false,
                 create_user : user_id,
                 create_date : new Date (moment(new Date()).format("YYYY-MM-DD")),
            }
        })
        if(!result){
            return res.json({
                code: 400,
                status_resposse: false,
                messsage: "Tạo ngành nghề thất bại",
            }); 
        }
        return res.json({
            code: 200,
            message: "Tạo ngành nghề thành công",
            status_resposse: true,
            data: result,
        });

    }catch(error){
        return res.json({
            code : 400,
            status_resposse: false,
            message : error.message
        })
    }
}

const updateMajor = async (req, res)=>{
    let{
        majors_id,
        majors_name
    } = req.body
    try{
        let { user_id = null, user_type_id = null } = req;
        if(!user_id || user_type_id !=1 ){
            return res.json({
                code : 400,
                message : "Người dùng không hợp lệ",
                status_resposse: false,
            })
        }
        const result = await prisma.majors.update({
            where : {
                id : Number(majors_id)
            },
            data : {
                majors_name : majors_name,
                update_date : new Date (moment(new Date()).format("YYYY-MM-DD")),
                update_user : user_id
            }
        })
        if(!result){
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

const deleteMajor = async (req, res)=>{
    let{
        majors_id,
    } = req.body
    try{
        let { user_id = null, user_type_id = null } = req;
        if(!user_id || user_type_id !=1 ){
            return res.json({
                code : 400,
                message : "Người dùng không hợp lệ",
                status_resposse: false,
            })
        }
        const result = await prisma.majors.update({
            where : {
                id : Number(majors_id)
            },
            data : {
                delete_date : new Date (moment(new Date()).format("YYYY-MM-DD")),
                delete_user : user_id,
                is_active : false,
                is_delete : true
            }
        })
        if(!result){
            return res.json({
                code: 400,
                status_resposse: false,
                messsage: "Xóa ngành nghề thất bại",
            }); 
        }
        return res.json({
            code: 200,
            message: "Xóa ngành nghề thành công",
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



module.exports = {
    getListMajor,
    createMajor,
    updateMajor,
    deleteMajor
}