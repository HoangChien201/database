const mongoose=require('mongoose');

const typeOfDishShema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    dishes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Dishes"
        }
    ]
})
const TypeOfDish=mongoose.model("TypeOfDish",typeOfDishShema);
module.exports={TypeOfDish}