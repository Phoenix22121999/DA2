const express = require('express');
const AccountRouter = require('./Account/Account.route');


const routers = [
    {
        prefix : '/account',
        router : AccountRouter
    },
]

module.exports = {
    routers
}