//Authentication - Varriying the user and maintaining the session

//Password- Something

const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authRoutes = require('./Routes/authRoutes');

app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

//encrypting the password
// app.post('/encrytion', async (req, res) => {
//     //bcrypt - for encryption of data
//     const salt = await bcrypt.genSalt();
//     let password = await bcrypt.hash('Password', salt);

//     res.send(`Encrypted password: ${password}`);
// })

// app.post('/checkPass', async (req, res) => {
//     let result = await bcrypt.compare("Password123", "$2b$10$zhIdmK7d.Tw4KxkFumj5UOdSCywYpKJ4MIoePcmGof9EyH1cdlkIe")

//     res.send(`Password is ${result}`);
// });

//JWT - JSON Web Token
// app.post('/token', async (req, res) => {
//     let token = await jwt.sign({ user: 'Rohit' }, 'secretKey',);

//     res.send(`Token: ${token}`);
// });

// app.get('/verifyToken', async (req, res) => {
//     let data = await jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiUm9oaXQiLCJpYXQiOjE3MzgwMDI0MTJ9.E7r1cZFXpPX8ysGYL_LiSEYkbVHwuF7I8HsgxY2XCtA", "secretKey")

//     res.send(data);
// });


// app.get('/setCookie', (req, res) => {
//     res.cookie('name', 'Rohit', {
//         maxAge: 1000 * 60 * 60 * 24 * 28,
//         httpOnly: true,
//         secure: true,
//     });
//     res.send('Cookie is set');
// });

// app.get('/getCookie', (req, res) => {
//     res.send(req.cookies.name);
// });


app.use('/api/auth', authRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});