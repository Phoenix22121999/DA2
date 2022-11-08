const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { response } = require("express");
const bcrypt = require("bcrypt");
BigInt.prototype.toJSON = function() { return this.toString() }

const prisma = new PrismaClient();

const formatObj = (result) => {
    let obj = {
        id: result[0].id,
        username: result[0].username,
        //   name: result[0].name,
        //   email: result[0].email,
        user_id: result[0].user_id,
        user_type_id: result[0].user_type_id,
        //   address: result[0].address,
        //   role: result[0].role,
    };
    return obj;
};

const getListAcccount = async (req, res) => {
    try {
        const products = await prisma.user_Account.findMany();
        res.json({
            code: 200,
            message: "get list account",
            data: products,
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
                username: user_name
                // is_active : 1,
                // is_delete : 0
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
                let obj = formatObj(resultSignIn);
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
                    code : 500,
                    status_resposse : false,
                    message : 'Đăng nhập thất bại vui lòng thử lại !'
                })
            }
        }
    } catch (error) {
        return res.json({
            code: 400,
            message: error.message,
        });
    }
};



module.exports = {
    getListAcccount,
    signIn,
};
