const express = require('express');

const Upload = require('./Upload/Upload.route');


const routers = [
    {
        prefix : '/upload',
        router : Upload
    }
]

module.exports = {
    routers
}