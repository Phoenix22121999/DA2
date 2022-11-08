const { PrismaClient } = require("@prisma/client");
const gateToken = require("../../Middleware/Middleware");
const jwt = require("jsonwebtoken");
const { createPassHash } = require("../../Middleware/config");
const { response } = require("express");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();
BigInt.prototype.toJSON = function() { return this.toString() }
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

const getListAcccountManager = async (req, res) => {
    try {
        const products = await prisma.User_Manager.findMany();
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

// Khởi tạo tài khoản quản lý
const createOrUpdate = async (req, res) => {
    const {
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
        avartar
    }= req.body

    

    return res.json({
        code : 200,
        message : "Khoi tao thanh cong"
    })

};

module.exports = {
    getListAcccountManager,
    createOrUpdate
};
