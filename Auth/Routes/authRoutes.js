const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
    userProfile,
} = require('../controllers/authControllers');

const { protect } = require('../middlewares/protect');

router.post('/register', register);

router.post('/login', (req, res) => {
    res.send('User logged in');
});

router.post('/logout', (req, res) => {
    app.get('/setCookie', (req, res) => {
        res.cookie('', {
            maxAge: 1000 * 60 * 60 * 24 * 28,
            httpOnly: true,
            secure: true,
        });
        res.send('You have been logged out');
    });
});

router.get('/profile', protect, userProfile);
