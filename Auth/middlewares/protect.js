const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

module.exports.protect = async (req, res, next) =>{
    if (req.cookies.token) {
        const decoded = await jwt.verify(req.cookies.token, 'secretKey');
        const user = await userModel.findById(decoded.email);
        req.user = user;
        next();
    } else {
        res.send('You are not logged in');
    }
}