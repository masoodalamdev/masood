const mongoose = require("mongoose");

// const schoolSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     contact: { type: String, required: true },
//     address: { type: String, required: true },
//     students: { type: String, required: false },
//     logo: { type: String, required: false }
// });

const SchoolSchema = new mongoose.Schema({
    // title: { type: String, required: true },
    // desc: { type: String, required: true },
    // song: { type: String, required: true },
    // img: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    department: { type: String, required: true },
    status: { type: String, required: true },
    // role: { type: String, required: true },
    imgUrl: { type: String, required: true },
    // img2: { type: String, required: true },
});

module.exports = mongoose.model("School", SchoolSchema)