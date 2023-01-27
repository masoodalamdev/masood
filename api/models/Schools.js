const mongoose = require("mongoose");

// const schoolSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     contact: { type: String, required: true },
//     address: { type: String, required: true },
//     students: { type: String, required: false },
//     logo: { type: String, required: false }
// });

const SchoolSchema = new mongoose.Schema({
    schoolName: { type: String, required: true },
    email: { type: String, required: true },
    principalName: { type: String, required: true },
    principalContact: { type: String, required: true },
    principalCnic: { type: String, required: true },
    schoolAddress: { type: String, required: true },
    // status: { type: String, required: false },
    // role: { type: String, required: true },
    // imgUrl: { type: String, required: false },
    // img2: { type: String, required: true },
});

module.exports = mongoose.model("School", SchoolSchema)