const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    teacherName: { type: String, required: true },
    schoolName: { type: String, required: true },
    email: { type: String, required: true },
    teacherContact: { type: String, required: true },
    teacherCnic: { type: String, required: true },
    teacherQualification: { type: String, required: true },
    teacherExperience: { type: String, required: true },
    teacherSalary: { type: String, required: true },
    teacherAddress: { type: String, required: true },
    // status: { type: String, required: false },
    // role: { type: String, required: true },
    // imgUrl: { type: String, required: false },
    // img2: { type: String, required: true },
});

module.exports = mongoose.model("Teacher", TeacherSchema)