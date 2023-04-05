const express = require("express");
const router = express.Router();
const recruiterPostService = require("./recruiterPost.service");
const { checkToken } = require("../../Middleware/Middleware");

router.get("/", recruiterPostService.getListPost);

router.get("/list-of-user", checkToken, recruiterPostService.getListPostOfUser);
router.get(
	"/list-of-user-by-id",
	checkToken,
	recruiterPostService.getListPostOfUserById
);

router.post("/", checkToken, recruiterPostService.createPost);
<<<<<<< HEAD

router.put("/", checkToken, recruiterPostService.update);

router.post("/delete", checkToken, recruiterPostService.deletePost);

router.get("/get-detail", recruiterPostService.getDetail);

router.post("/bookmark-post", checkToken, recruiterPostService.bookMarkPost);

router.post(
	"/un-bookmark-post",
	checkToken,
	recruiterPostService.unbookMarkPost
);

router.get("/list-bookmark", checkToken, recruiterPostService.getListBookMark);
router.get(
	"/list-bookmark-by-id",
	checkToken,
	recruiterPostService.getListBookMarkById
);

//getListBookMark

// bookMarkPost,
// unbookMarkPost
=======

router.put("/", checkToken, recruiterPostService.update);

router.post("/delete", checkToken, recruiterPostService.deletePost);

router.get("/get-detail", recruiterPostService.getDetail);
>>>>>>> 4773822d28e2b5332f2f06ab9c937ee26d636b85

module.exports = router;
