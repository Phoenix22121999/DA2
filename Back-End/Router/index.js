const express = require('express');
// Tai khoan
const AccountRouter = require('./Account/Account.route');

const AccountType = require('./AccountType/AccountType.route');


const routers = [
    {
        prefix : '/account',
        router : AccountRouter
    },
    {
        prefix : '/account-type',
        router : AccountType
    }
    // {
    //     prefix : '/account-manager',
    //     router : AccountManagerRouter
    // }

]

module.exports = {
    routers
}