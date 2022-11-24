const express = require('express');
// Tai khoan
const AccountRouter = require('./Account/Account.route');

const AccountType = require('./AccountType/AccountType.route');

const cv = require('./Resume/resume.route');

const recruiterPost = require('./RecruiterPost/recruiterPost.route');

const routers = [
    {
        prefix : '/account',
        router : AccountRouter
    },
    {
        prefix : '/account-type',
        router : AccountType
    },
    {
        prefix : '/cv',
        router : cv
    },
    {
        prefix : '/recruiter-post',
        router : recruiterPost
    }

]

module.exports = {
    routers
}