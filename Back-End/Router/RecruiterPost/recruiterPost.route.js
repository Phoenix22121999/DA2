const express = require("express");
const router = express.Router();
const recruiterPostService = require("./recruiterPost.service");
const { checkToken } = require("../../Middleware/Middleware");

router.get("/" , recruiterPostService.getListPost);

router.get("/list-of-user", checkToken , recruiterPostService.getListPostOfUser);

router.post("/", checkToken , recruiterPostService.createPost);

router.put("/", checkToken , recruiterPostService.update);

router.post("/delete" , checkToken ,recruiterPostService.deletePost)

router.get("/get-detail" ,recruiterPostService.getDetail)




module.exports = router;
