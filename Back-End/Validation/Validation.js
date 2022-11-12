const {check} = require('express-validator');

module.exports = [
    check('user_type_name').exists().withMessage('Vui lòng không điền đủ tên loại tài khoản')
    .notEmpty().withMessage('Vui lòng không để trống tên loại tài khoản')
]