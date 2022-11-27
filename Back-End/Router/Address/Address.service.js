const { PrismaClient} = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const moment =  require('moment-timezone')
BigInt.prototype.toJSON = function () {
	return this.toString();
};
const prisma = new PrismaClient();



const getProvince = async (req, res) =>{
    try{
        const result = await prisma.provinces.findMany({});
        return res.json({
			code: 200,
			message: "Lấy danh sách tỉnh/Thành thành công",
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

const getDistrict = async (req, res) =>{
    try{
        let {province_code = ''} = req.query;
        const result = await prisma.districts.findMany({
            where : {
                province_code : province_code
            }
        });
        return res.json({
			code: 200,
			message: "Lấy danh sách Quận/Huyện thành công",
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

const getWard = async (req, res) =>{
    try{
        let {district_code = ''} = req.query;
        const result = await prisma.wards.findMany({
            where : {
                district_code : district_code
            }
        });
        return res.json({
			code: 200,
			message: "Lấy danh sách Phường/Xã thành công",
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
    getProvince,
    getDistrict,
    getWard
}