const mongoose = require('mongoose')

const detailsSchema = mongoose.Schema({
    fName: {
        type: String,
        required: true,
        trim: true,
    },
    mName: {
        type: String,
        required: true,
        trim: true,
    },
    lName: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    mobile: {
        type: Number,
        required: true,
        trim: true,
    },
    aadhar: {
        type: String,
        required: true,
        trim: true,
    },
    pan: {
        type: String,
        required: true,
        trim: true,
    },
    income: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    //personal details end
    bName: {
        type: String,
        required: true,
        trim: true,
    },
    gst: {
        type: String,
        required: true,
        trim: true,
    },
    established: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    bMobile: {
        type: Number,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    bAddress: {
        type: String,
        required: true,
        trim: true,
    },
    //business details end
    amount: {
        type: Number,
        required: true,
        trim: true,
    },
    tenure: {
        type: Number,
        required: true,
        trim: true,
    },
    interest: {
        type: Number,
        required: true,
        trim: true,
    },
    loanType: {
        type: String,
        required: true,
        trim: true,
    },
    accountNo: {
        type: String,
        required: true,
        trim: true,
    },
    ifsc: {
        type: String,
        required: true,
        trim: true,
    },
    branch: {
        type: String,
        required: true,
        trim: true,
    },
    //loan details end
},{
    timestamps: true
})

//finalize model
const Details = mongoose.model('Details', detailsSchema)

//export
module.exports = {Details}