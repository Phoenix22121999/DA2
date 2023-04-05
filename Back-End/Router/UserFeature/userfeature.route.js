const express = require("express");
const router = express.Router();
const UserFeatureService = require("./userfeature.service");
const { checkToken } = require("../../Middleware/Middleware");
const validationCreate = require("../../Validation/Validation");


router.post("/user-education", checkToken ,validationCreate,UserFeatureService.createUserEducation);

router.put("/user-education", checkToken, UserFeatureService.UpdateUserEducation);

router.post("/user-education/delete", checkToken, UserFeatureService.deleteUserEducation);


router.post("/user-experience", checkToken ,validationCreate,UserFeatureService.createUserExperience);

router.put("/user-experience", checkToken, UserFeatureService.UpdateUserExperience);

router.post("/user-experience/delete", checkToken, UserFeatureService.deleteUserExperience);



router.post("/user-achievement", checkToken ,validationCreate,UserFeatureService.createUserAchievement);

router.put("/user-achievement", checkToken, UserFeatureService.UpdateUserAchievement);

router.post("/user-achievement/delete", checkToken, UserFeatureService.deleteUserAchievement);


router.post("/user-project", checkToken ,validationCreate,UserFeatureService.createUserProject);

router.put("/user-project", checkToken, UserFeatureService.UpdateUserProject);

router.post("/user-project/delete", checkToken, UserFeatureService.deleteUserProject);

router.get("/all", checkToken, UserFeatureService.getDataAll);





module.exports = router;
