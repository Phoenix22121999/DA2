const express = require('express');
const router = express.Router();
const AccoutService = require('./Account.service');



router.get('/', AccoutService.getListAcccount);
router.post('/sign-in', AccoutService.signIn);
module.exports = router;