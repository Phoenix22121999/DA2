
const uploadFile = async (req,res ,next)=>{
    let file = req.files;
    if(!file) {
        const error = new Error('Please choose files')
        // error.httpStatusCode = 400
        // return next(error)
        return res.json({
            code : 400 , 
            message : "Vui lòng chọn tập tin"
        })
    }
    return res.json({
        code : 200 ,
        message : "Lưu trữ thành công",
        data : file
    })

}



const uploadImage = async (req,res ,next)=>{
    console.log(req.files);
    // let file = req.files;
    // if(!file) {
    //     const error = new Error('Please choose files')
    //     // error.httpStatusCode = 400
    //     // return next(error)
    //     return res.json({
    //         code : 400 , 
    //         message : "Vui lòng chọn tập tin"
    //     })
    // }
    // return res.json({
    //     code : 200 ,
    //     message : "Lưu trữ thành công",
    //     data : file
    // })

}




module.exports = {
    uploadFile,
    uploadImage
};
