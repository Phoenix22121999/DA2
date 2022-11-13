const express = require('express');
const UploadService = require('./Upload.service');
const router = express.Router();
const path = require('path');

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const maxSize = 4 * 1024 * 1024;

const storageFile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'Upload/file')
    },
    filename: function (req, file, cb) {
        let ext = path.extname(file.originalname); 
        cb(null, uuidv4().toString() + ext);
    }
  })

const uploadFile = multer({ 
    storage: storageFile ,
    limits : {fileSize : maxSize},
    // fileFilter : uploadFileFilter
})

router.post('/file',uploadFile.array('files') , UploadService.uploadFile)




module.exports = router;