const express = require("express");
const router = express.Router();
const mailService = require("./mail.service");
const { checkToken } = require("../../Middleware/Middleware");



router.post('/send',mailService.sendMail)


module.exports = router;
