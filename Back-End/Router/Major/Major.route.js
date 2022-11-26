const express = require("express");
const router = express.Router();
const majorsService = require("./Major.service");
const { checkToken } = require("../../Middleware/Middleware");

router.get("/" , majorsService.getListMajor);

router.post("/", checkToken , majorsService.createMajor);

router.put("/", checkToken , majorsService.updateMajor);

router.post("/delete" , checkToken ,majorsService.deleteMajor)

module.exports = router;