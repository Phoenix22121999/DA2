const express = require('express');
const router = express.Router();
const ResumeService = require('./resume.service');
const {checkToken} = require("../../Middleware/Middleware");


router.get("/", checkToken , ResumeService.getListResume);

router.post("/", checkToken , ResumeService.createCV);

router.put("/", checkToken , ResumeService.updateCV);

router.post("/delete" , checkToken ,ResumeService.deleteCV)

router.post("/download", checkToken , ResumeService.downloadCV)


module.exports = router;