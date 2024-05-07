import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    titile: {
        type: String,
        required: [true, "please provide job title"],
        minLength: [3, "Job title must contain at least 3 characters"],
        maxLength: [50, "Job title can not exceed 50 characters"]
    },
    description: {
        type: String,
        required: [true, "Please provide job description"],
        minLength: [3, "Job description must contain at least 3 characters"],
        maxLength: [350, "Job description can not exceed 350 characters"]
    },
    category: {
        type: String,
        required: [true, "Job category is required!"],
    },
    country: {
        type: String,
        required: [true, "Job country is required!"],
    },
    city: {
        type: String,
        required: [true, "Job city is required!"]
    },
    location: {
        type: String,
        required: [true, "Please provide exact location!"],
        minLength: [50, "job location must contain at least 50 charecters!"]
    },
    fixedSalary: {
        type: Number,
        minLength: [4, "Fixed salary must contain at least 4 digits!"],
        maxLength: [9, "Fixed salary connot exceed 9 digits!"]
    },
    salaryFrom: {
        type: Number,
        minLength: [4, "Salary From must contain at least 4 digits!"],
        maxLength: [9, "Salary From connot exceed 9 digits!"]
    },
    salaryTo: {
        type: Number,
        minLength: [4, "SalaryTo must contain at least 4 digits!"],
        maxLength: [9, "SalaryTo From connot exceed 9 digits!"]
    },
    expired: {
        type: Boolean,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job",jobSchema)