const express = require('express');
const router = express.Router();
const AccoutService = require('./Account.service');
const {checkToken} = require("../../Middleware/Middleware");



router.get('/', AccoutService.getListAcccount);
router.post('/sign-in', AccoutService.signIn);
router.post('/sign-up', AccoutService.signUp)
router.post('/account-update', checkToken, AccoutService.update)


module.exports = router;