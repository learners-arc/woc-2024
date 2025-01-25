//Mongoose - MongoDB ko connect karne k liye

//MongoDb Atlas(Production) and Compass(local)

//Database , Collection, Document

//Dominoz -  Database, Collection - Pizza, Garlic Bread  , Document - Achari Pizza - recipie, items, Masala Pizza - recipie, items

// Database - 1000s of collections - multiple doucuments

//Schema - structure jis form me hum data store karenge

// const express = require("express");
// const app = express();
// const mongoose = require("./Config/mongoose");
// const { userModel, validateUser } = require("./Models/user");
// const { postModel } = require("./Models/post");

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

//Create a data
// app.post("/create", async (req, res, next) => {
//   try {
//     const createdUser = await userModel.create({
//       name: "Rohit",
//       email: "rohit@gmail.com",
//       password: "rs1476r8t9563542",
//       age: 28,
//     });

//     res.status(201).send(createdUser); // Return the created user with a 201 status
//   } catch (error) {
//     // Handle error and pass it to the next middleware
//     next(error);
//   }
// });

// app.get("/aggregations", async (req, res, next) => {
//     try {
//       const result = await userModel.aggregate([
//         {
//           $lookup: {
//             from: "posts", 
//             localField: "_id", 
//             foreignField: "user", 
//             as: "Data",
//           },
//         },
//       ]);
      
//       res.status(200).send(result); // Send the aggregation result as response
//     } catch (error) {
//       next(error); // Pass any errors to the next middleware
//     }
//   });

// // to call populated data
// app.get("/users", async (req, res, next) => {
//   try {
//     const readUser = await userModel.find({ age: { $eq: 28 } }).populate('post');
//     res.status(200).send(readUser);
//   } catch (error) {
//     next(error);
//   }
// });

//$match
//$group
//$lookup
//$unwind
//$project

// Aggregation - Jab hum ek saath multiple queries perform karte hai

//This is how we write aggregation queries
// app.get("/aggregations", async (req, res, next) => {
//     userModel.aggregate([
//         pehla query,
//         dusra query,
//         tisra query
//     ])
// });

//match
// app.get("/aggregations", async (req, res, next) => {
//     userModel.aggregate([{ $match: { name: "Rohit" } }])
// });

//group
// app.get("/aggregations", async (req, res, next) => {
//     userModel.aggregate([{ $group: { name: "Rohit", data: { $push : "$$ROOT" } } }])
// });

//lookup
//$lookup: {
//     from: "posts",
//     localField: "_id",
//     foreignField: "user",
//     as: "post",
//   },


//unwind
// app.get("/aggregations", async (req, res, next) => {
//     userModel.aggregate([
//         {
//             $unwind: "$tags"
//         }
//     ])
// });

//project
// app.get("/project", async (req, res, next) => {
//   userModel.aggregate([
//     {
//       $project: {
//         MeraNaam: "$name",
//         // name: 1,
//         age: 1,
//       },
//     },
//   ]);
// });

// user{
//     MeraNaam: "Rohit",
//     age: 28,
// }

//create post by embedding
// app.post("/:name/create/post", async (req, res, next) => {
//     try {
//       const user = await userModel.findOne({name: req.params.name});
//       user.post.push("bgchvkbk")
//       await user.save()

//       res.status(201).send(user.post); // Return the created user with a 201 status
//     } catch (error) {
//       // Handle error and pass it to the next middleware
//       next(error);
//     }
//   });

//create post by reference
// app.post("/:name/create/post", async (req, res, next) => {
//     try {
//       const user = await userModel.findOne({name: req.params.name});
//       const post = await postModel.create({
//         title: "Post 1",
//         content: "This is the content of post 1",
//         user: user._id,
//       });

//       user.post.push(post._id)
//       await user.save()

//       res.status(201).send(user.post); // Return the created user with a 201 status
//     } catch (error) {
//       // Handle error and pass it to the next middleware
//       next(error);
//     }
//   });

//Read a data
// app.get("/read", async (req, res, next) => {
//   let readUser = await userModel.findOne({ email: "divya@gmail.com" });

//   res.send(readUser);
// });

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

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
