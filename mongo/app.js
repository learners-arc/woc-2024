//Mongoose - MongoDB ko connect karne k liye

//MongoDb Atlas(Production) and Compass(local)

//Database , Collection, Document

//Dominoz -  Database, Collection - Pizza, Garlic Bread  , Document - Achari Pizza - recipie, items, Masala Pizza - recipie, items

// Database - 1000s of collections - multiple doucuments

//Schema - structure jis form me hum data store karenge

// const express = require("express");
// const app = express();
// const mongoose = require("./Config/mongoose");
// const {userModel, validateUser} = require("./Models/user");

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

//Create a data
// app.get('/create', async (req, res, next) => {
//     let createdUser =  await userModel.create({
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     })

//     res.send(createdUser);
// });

//Read a data
// app.get('/read', (req, res, next) => {
//     let readUser =  userModel.findOne({ email: 'divya@gmail.com' })

//     res.send(readUser);
// })

//Update a data
// app.get('/update', (req, res, next) => {
//     let updatedUser =  userModel.findOneAndUpdate({ email: 'divya@gmail.com' }, { email: 'something@gmail.com' }, { new: true })

//     res.send(updatedUser);
// })

//Delete a data
// app.get('/delete', (req, res, next) => {
//     let deletedUser =  userModel.findOneAndDelete({ email: 'divya@gmail.com' })

//     res.send(deletedUser);
// })

// How to insert multiple users
//eq
//ne
//lt
//lte
//gt
//gte
//in
//nin
//exists
//size
//or

// data = [
//     {
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     },
//     {
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     },
//     {
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     },
//     {
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     },
//     {
//         name: 'Divya',
//         email: 'divya@gmail.com',
//         password: 'divya123',
//         age: 28
//     },]

// app.get('/create', (req, res, next) => {
//     let createdUser =  userModel.insertMany(data);

//     res.send(createdUser);
//     });

//eq - equals to
// app.get("/users", (req, res, next) => {
//   let readUser = userModel.find({ age: { $eq: 28 } });
// });

//not equal to
// app.get("/users", (req, res, next) => {
//     let readUser = userModel.find({ age: { $ne: 28 } });
//   });


// app.get("/nonvoter", (req, res, next) => {
//     let readUser = userModel.find({ age: { $lt: 18 } });
//   });

//   app.get("/voter", (req, res, next) => {
//     let readUser = userModel.find({ age: { $gte: 18 } });
//   });

// app.get("/users", (req, res, next) => {
//     let readUser = userModel.find({ age: { $in: [25, 30, 40, 15] } });
//   });

// app.get("/users", (req, res, next) => {
//     let readUser = userModel.find({ photo: { $exists: false } });
//   });

//And and Or
// app.get("/users", (req, res, next) => {
//     let readUser = userModel.find({ age: { $and: [{name: {$gt: 25}}, {age: {$lt: 40}}] } });
//   });


//regex

// ^ - start with
// $ - end with
// . - any character
// .* - in middle
// ^t.*s$ - start with t and end with t

// app.get("/users", (req, res, next) => {
//     let readUser = userModel.find({ name: { $regex: "^V.*/i" } }); //starts with v
//   });

// app.post("/create", (req, res, next) => {
//     let { name, email, password, age } = req.body;

//     validateUser({name, email, password, age});
//     res.send("User created");
//   });



// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
