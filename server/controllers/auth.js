const express = require('express');
const UserAccount = require('../models/UserAccount.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');
//const expressJwt = require('express-jwt');
// CommonJS import
const { expressjwt: expressJwt } = require('express-jwt');

// ES Module import
//import { expressjwt as expressJwt } from 'express-jwt';

// Sign-in function
async function signin(req, res) {
    try {
        let userAccount = await UserAccount.findOne({ "email": req.body.email });
        if (!userAccount) {
            return res.status('401').json({ error: 'User not exist' });
        }
        if (!userAccount.authenticate(req.body.password)) {
            return res.status('401').jcdson({ error: 'Password is Wrong' });
        }
        const token = jwt.sign({ _id: userAccount._id }, config.jwtSecret);
        res.cookie('t', token, { expire: new Date() + 9999 });
        return res.json({
            token,
            userAccount: {
                _id: userAccount._id,
                username: userAccount.username,
                email: userAccount.email,
                role: userAccount.role,
                type: userAccount.type
            }
        });
    } catch (err) {
        return res.status('401').json({ error: 'Unable to Sign in' });
    }
}

// Sign-out function
const signout = (req, res) => {
    res.clearCookie("t");
    return res.status('200').json({
        message: "Successfully signed out"
    });
};

// Require sign-in middleware
const requireSignin=expressJwt({
    secret: config.jwtSecret,
    algorithms: ["HS256"],
    userProperty: 'auth'
});
// Authorization check
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
    if (!authorized) {
        return res.status('403').json({
            error: 'You are not authorized to perform this operation'
        });
    }
    next();
};




module.exports = { signin, signout, hasAuthorization, requireSignin };
