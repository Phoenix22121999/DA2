const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { v4 : uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");

BigInt.prototype.toJSON = function () {
    return this.toString();
};

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
            usert_type_id,
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
            where :{
                username : username
            }
        })
        // Kiểm tra xem tài khoản đã tồn tại hay chưa
        if(!(isExists.length > 0)){
            const requestCreate = await prisma.user_Account.create({
                data : { 
                    username : username,
                    password : passHash,
                    is_active : true,
                    is_delete : false,
                    user_type : {
                        user_type_id : usert_type_id
                    },
                    first_name :  first_name,
                    last_name : last_name,
                    full_name : full_name,
                    email : email ,
                    number_phone : number_phone,
                    age : age,
                    gender : gender,
                    address : address,
                    city_id : city_id,
                    district_id : district_id,
                    ward_id : ward_id,
                    avartar : avartar,
                    user_type : user_type,
                    logo : logo, 
                }
            })
            // Kiểm tra quá trình đăng kí tài khoản có được hay không 
            if(requestCreate && requestCreate.length < 0 ){
                    return res.json({
                    code: 400,
                    status_resposse: false,
                    message: "Đăng nhập thất bại vui lòng thử lại !",
                });
            }
            let obj = requestCreate && requestCreate.length > 0 ? formatObj(requestCreate) : {};
            const AccessToken = jwt.sign(
                obj,
                process.env.ACCESS_TOKEN
            );

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
        return res.json({
            code: 400,
            message: error.message,
        });
    }
};



module.exports = {
    getListAcccount,
    signIn,
    signUp,
};
