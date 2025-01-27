const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.register = async (req, res) => {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
        res.send('User already exists');
    } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await userModel.create({
            email,
            password: hashedPassword,
        });
        res.send('User registered');
    }
};

module.exports.login = async (req, res) => {
};

module.exports.logout = async (req, res) => {
};

module.exports.userProfile = async (req, res) => {
};


