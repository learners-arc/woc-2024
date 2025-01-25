const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title: String,
    content: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

module.exports = mongoose.model('Post', postSchema);


// const postSchema = mongoose.Schema({
//     title: hgvjh,
//     content: Stjhring,
//     tags: [#coding],
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     }
// });

// const postSchema = mongoose.Schema({
//     title: hgvjh,
//     content: Stjhring,
//     tags: [#viral],
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     }
// });

// const postSchema = mongoose.Schema({
//     title: hgvjh,
//     content: Stjhring,
//     tags: [#something],
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     }
// });