const express = require('express');
const router = express.Router();
const AccoutTypeService = require('./AccountType.service');
const {checkToken} = require("../../Middleware/Middleware");
const validationCreate = require("../../Validation/Validation");

// router.get('/', AccoutService.getListAcccount);
// router.post('/sign-in', AccoutService.signIn);
// router.post('/sign-up', AccoutService.signUp)
router.post('/',checkToken , validationCreate,AccoutTypeService.createAccountType) //deleteAccountType
router.get('/',checkToken,AccoutTypeService.getListAccountType) //deleteAccountType
router.post('/delete', checkToken ,AccoutTypeService.deleteAccountType ); 

router.put('/update', checkToken ,AccoutTypeService.updateAccountType ); 



module.exports = router;