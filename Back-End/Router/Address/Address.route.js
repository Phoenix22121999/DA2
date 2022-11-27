const express = require("express");
const router = express.Router();
const addressService = require("./Address.service");
const { checkToken } = require("../../Middleware/Middleware");


router.get("/provinces", addressService.getProvince); //getWard

router.get("/district", addressService.getDistrict); 

router.get("/ward", addressService.getWard); 



module.exports = router;