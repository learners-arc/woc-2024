// const mongoose = require('mongoose');
// const Joi = require('joi');

// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         minLength: 3,
//         required: true,
//         maxLength: 100,
//     },
//     email: String,
//     password: String,
//     age: {
//         type: Number,
//         min: 18,
//         max: 100,
//         required: true,
//     },
//     photo: String,
// })


// function validateUser(data) {
//     let schema = Joi.object({
//         name: Joi.string().min(3).max(100).required(),
//         email: Joi.string().email().required(),
//         password: Joi.string().min(8).required(),
//         age: Joi.number().min(18).max(100).required(),
//         photo: Joi.string(),
//     });

//     schema.validate(data);
//     if (schema.error) return schema.error
//     else return null;  
   
// }

// const userModel = mongoose.model('user', userSchema);

// module.exports = {userModel, validateUser};