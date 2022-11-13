const express = require('express');
const router = express.Router();
const {routers} = require('./Router/index');

(() => {
    try{
        routers.forEach(route =>{
            // console.log(route);
            router.use(route.prefix , route.router);
        })
    }catch(error){
        console.log(error);
    }
})()


module.exports = router;


