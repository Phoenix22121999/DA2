const express = require('express');
const router = express.Router();
const AccountManager = require('./AccountManager.service');
const {checkToken} = require('../../Middleware/Middleware');


// Lấy danh sách tài khoản quản lý
router.get('/', AccountManager.getListAcccountManager);


// Tạo tài khoản quản lý
router.post('/', checkToken ,AccountManager.createOrUpdate);




// router.post('/sign-in', AccoutService.signIn);
module.exports = router;