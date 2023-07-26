const mongoose = require("mongoose");

const billShema = new mongoose.Schema({
    billDate: {
        type: String,
        require:true
    },
    rate: {
        type: Number,
    },
    note: {
        type: String,
    },
    status: {
        type: Boolean,
        require:true
    },
    detailedInvoice:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DetailedInvoice"
        }
    ],
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
        require:true
    },
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        require: true
    }
})

const Bill = mongoose.model("Bill", billShema);
module.exports = { Bill }