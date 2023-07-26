const mongoose=require('mongoose');

const staffSchema=new mongoose.Schema({
    fullName:{
        type:String,
        require:true
    },
    idCard:{
        type:String,
        require:true

    },
    phone:{
        type:String,
        require:true

    },
    address:{
        type:String,
        require:true

    },
    position:{
        type:String,
        require:true

    },
    password:{
        type:String,
        require:true

    },
    bills:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Bill"
        }
    ]

})

let Staff=mongoose.model("Staff",staffSchema);

module.exports={Staff}