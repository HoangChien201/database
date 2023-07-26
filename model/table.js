const mongoose=require('mongoose');

const tableShema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    },
    bills:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Bill"
        }
    ]
    
})

const Table=mongoose.model("Table",tableShema);
module.exports={Table};