const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    fatherName: { type: String, required: true },
    schoolName: { type: String, required: true },
    dob: { type: String, required: true },
    studentContact: { type: String, required: true },
    fatherContact: { type: String, required: true },
    studentCnic: { type: String, required: false },
    studentAddress: { type: String, required: true },
    // statu s: { type: String, required: false },
    // role: { type: String, required: true },
    // imgUrl: { type: String, required: false },
    // img2: { type: String, required: true },
});

module.exports = mongoose.model("Student", StudentSchema)