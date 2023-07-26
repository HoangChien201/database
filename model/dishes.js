const mongoose = require('mongoose');

const dishesShema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    unitPrice: {
        type: String,
        require: true
    },
    component: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    typeOfDish:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TypeOfDish"
    }

})

const Dishes = mongoose.model("Dishes", dishesShema);
module.exports = { Dishes }