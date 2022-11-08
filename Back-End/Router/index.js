const express = require('express');
// Tai khoan
const AccountRouter = require('./Account/Account.route');


// Tai khoan quan ly
const AccountManagerRouter = require('./AccountManager/AccountManager.route');


const routers = [
    {
        prefix : '/account',
        router : AccountRouter
    },
    {
        prefix : '/account-manager',
        router : AccountManagerRouter
    }

]

module.exports = {
    routers
}