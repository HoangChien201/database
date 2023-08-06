const mongoose=require('mongoose');

const tokenShema=new mongoose.Schema({
    token:{
        type:String,
        require:true
    },
    idStaff:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"Staff"
    }
})

const Token=mongoose.model("Token",tokenShema);
module.exports=Token;