const express = require('express');
// Tai khoan
const AccountRouter = require('./Account/Account.route');

const AccountType = require('./AccountType/AccountType.route');

const cv = require('./Resume/resume.route');

const recruiterPost = require('./RecruiterPost/recruiterPost.route');

const JobType = require('./JobType/JobType.route');

const Major = require('./Major/Major.route');

const Address = require('./Address/Address.route');

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
    },
    {
        prefix : '/job-type',
        router : JobType
    },
    {
        prefix : '/majors',
        router : Major
    },
    {
        prefix : '/address',
        router : Address
    }


]

module.exports = {
    routers
}