const express = require('express');
const router = express.Router();
const AccoutService = require('./Account.service');



router.get('/', AccoutService.getListAcccount);
module.exports = router;