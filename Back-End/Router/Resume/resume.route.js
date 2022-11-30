const express = require('express');
const router = express.Router();
const ResumeService = require('./resume.service');
const {checkToken} = require("../../Middleware/Middleware");


router.get("/", checkToken , ResumeService.getListResume);

router.post("/", checkToken , ResumeService.createCV);

router.put("/", checkToken , ResumeService.updateCV);

router.post("/delete" , checkToken ,ResumeService.deleteCV)

router.get("/download/:file_id(\\d+)", checkToken , ResumeService.downloadCV)


router.post("/apply-cv" , checkToken ,ResumeService.applyCV)


router.post("/un-apply-CV" , checkToken ,ResumeService.unApplyCV)


router.get("/history-apply" , checkToken ,ResumeService.getHistory)


router.get("/history-applier-post" , checkToken ,ResumeService.getHistoryApplier) //getHistoryApplier



module.exports = router;