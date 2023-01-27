const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
 
    name: { type: String, required: true },
    designation: { type: String, required: true },
    qualification: { type: String, required: true },
    experience: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    salary: { type: String, required: true },
    jobType: { type: String, required: true },
    address: { type: String, required: true },
    imgUrl: { type: String, required: false },
});

module.exports = mongoose.model("Jobs", JobsSchema)