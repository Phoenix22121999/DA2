const express = require("express");
const router = express.Router();
const jobType = require("./JobType.service");
const { checkToken } = require("../../Middleware/Middleware");


router.get("/" , jobType.getListJobType);

router.post("/", checkToken , jobType.createJobType);

router.put("/", checkToken , jobType.updateJobType);

router.post("/delete" , checkToken ,jobType.deleteJobType)


module.exports = router;
// getListJobType,
// createJobType,
// updateJobType,
// deleteJobType