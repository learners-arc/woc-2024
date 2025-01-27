const mongoose = require('mongoose');
const Joi = require('joi');

// User schema definition
const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
    maxLength: 100,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure the email is unique in the database
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  age: {
    type: Number,
    min: 18,
    max: 100,
    required: true,
  },
  photo: String,
});

// User validation using Joi
function validateUser(data) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    age: Joi.number().min(18).max(100).required(),
    photo: Joi.string().optional(),
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }, 
    ],
  });

  // Validate and return error if any
  const { error } = schema.validate(data);
  return error ? error.details : null;  // Return details of error
}

const userModel = mongoose.model('User', userSchema);

module.exports = { userModel, validateUser };


//This is how populated data will look like
// const schema = Joi.object({
//     name: Rohit,
//     email: hgvhj,
//     password: hgvjh,
//     age: 28,
//     photo: jhvk,
//     post: [
//         {
//             title: "Post 1",
//             content: "This is the content of post 1",
//         }, 

//         {
//             title: "Post 1",
//             content: "This is the content of post 1",
//         }
//     ],
//   });





// $group me data aise aata hai
// const schema = Joi.object({
//     name: Rohit,
//     data: {
//       age: 29,}
//   });

// const schema = Joi.object({
//     name: Rohit,
//     data: {
//       email: hgvhj,
//     password: hgvjh,
//     age: 28,
//     photo: jhvk,
//     post: [
//         {
//             title: "Post 1",
//             content: "This is the content of post 1",
//         }, 

//         {
//             title: "Post 1",
//             content: "This is the content of post 1",
//         }
//     ],}
//   });