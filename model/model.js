const mongoose=require('mongoose');

const staffSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    idStaff:{
        type:String,
        require:true
    },
    idCard:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    position:{
        type:String
    },
    password:{
        type:String
    }

})

let Staff=mongoose.model("Staff",staffSchema);

module.exports={Staff}