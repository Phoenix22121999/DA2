const jwt = require("jsonwebtoken");
require('dotenv').config();
const checkToken = (req,res, next)=>{
    const authorToken = req.header('Authorization');
    const token = authorToken && authorToken.split(' ')[1];
    if(!token){
        return res.json({code: 404 , message: "Access Token Not Found "});
    }
    try{
        const decrypt = jwt.verify(token , process.env.ACCESS_TOKEN);
        req.user_id = decrypt.id;
        req.user_type_id = decrypt.user_type_id;
        next();
    }catch(error){
        return res.json({code : 500 , message: error.message});
    }
}
module.exports = {
    checkToken
};