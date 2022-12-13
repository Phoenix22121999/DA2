const express = require("express");
const router = express.Router();
const AccoutService = require("./Account.service");
const { checkToken } = require("../../Middleware/Middleware");

// Lấy danh sách tài khoản getDetailAccount
router.get("/", checkToken, AccoutService.getListAcccount);

router.get("/get-detail", checkToken, AccoutService.getDetailAccount);
router.get(
	"/get-detail-with-id",
	checkToken,
	AccoutService.getDetailAccountWithId
);

// Đăng nhập
router.post("/sign-in", AccoutService.signIn);
// Đăng nhập với token
router.post("/sign-in-with-token", checkToken, AccoutService.signInWithToken);
// Đăng kí
router.post("/sign-up", AccoutService.signUp);
//Cập nhật thông tin cá nhân
router.post("/account-update", checkToken, AccoutService.update);
// Thay đổi mật khẩu
router.post("/change-password", checkToken, AccoutService.changePassword);

router.post("/sign-in-google", AccoutService.signInWithGoogle);

module.exports = router;
