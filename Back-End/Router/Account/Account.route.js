const express = require("express");
const router = express.Router();
const AccoutService = require("./Account.service");
const { checkToken } = require("../../Middleware/Middleware");

// Lấy danh sách tài khoản
router.get("/", AccoutService.getListAcccount);
// Đăng nhập
router.post("/sign-in", AccoutService.signIn);
// Đăng nhập với token
router.post("/sign-in-with-token", AccoutService.signInWithToken);
// Đăng kí
router.post("/sign-up", AccoutService.signUp);
//Cập nhật thông tin cá nhân
router.post("/account-update", checkToken, AccoutService.update);
// Thay đổi mật khẩu
router.post("/change-password", checkToken, AccoutService.changePassword);

module.exports = router;
