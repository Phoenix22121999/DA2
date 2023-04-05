const express = require("express");
const router = express.Router();
const ResumeService = require("./resume.service");
const { checkToken } = require("../../Middleware/Middleware");
<<<<<<< HEAD

router.get("/", checkToken, ResumeService.getListResume);
=======
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85

router.get("/", checkToken, ResumeService.getListResume);
router.get("/by-id", checkToken, ResumeService.getListResumeById);

<<<<<<< HEAD
router.get("/get-all", checkToken, ResumeService.getListResumeAll);
=======
router.post("/", checkToken, ResumeService.createCV);

router.put("/", checkToken, ResumeService.updateCV);

router.post("/delete", checkToken, ResumeService.deleteCV);

router.get("/download/:file_id(\\d+)", checkToken, ResumeService.downloadCV);

router.post("/apply-cv", checkToken, ResumeService.applyCV);
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85

router.post("/un-apply-CV", checkToken, ResumeService.unApplyCV);

<<<<<<< HEAD
router.get("/by-id", checkToken, ResumeService.getListResumeById);

router.post("/", checkToken, ResumeService.createCV);

router.put("/", checkToken, ResumeService.updateCV);

router.post("/delete", checkToken, ResumeService.deleteCV);

router.get("/download/:file_id(\\d+)", checkToken, ResumeService.downloadCV);

router.post("/apply-cv", checkToken, ResumeService.applyCV);

router.post("/un-apply-CV", checkToken, ResumeService.unApplyCV);

router.get("/history-apply", checkToken, ResumeService.getHistory);

router.get("/history-applier-post",checkToken,ResumeService.getHistoryApplier); //getHistoryApplier

router.get("/history-apply-by-id", checkToken, ResumeService.getHistoryById);

router.get("/history-applier-post-by-id",checkToken,ResumeService.getHistoryApplierById); //exportPDF

router.get("/export-pdf",checkToken,ResumeService.exportPDF); //exportPDF
=======
router.get("/history-apply", checkToken, ResumeService.getHistory);
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85

router.get(
	"/history-applier-post",
	checkToken,
	ResumeService.getHistoryApplier
); //getHistoryApplier

<<<<<<< HEAD
=======
router.get("/history-apply-by-id", checkToken, ResumeService.getHistoryById);

router.get(
	"/history-applier-post-by-id",
	checkToken,
	ResumeService.getHistoryApplierById
); //getHistoryApplier

>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85
module.exports = router;
