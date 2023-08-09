const mongoose=require('mongoose');

const detailedInvoiceShema=new mongoose.Schema({
    status:{
        type:String,
        require:true
    },
    dish:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Dishes",
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    bill:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bill",
        require:true
    }
    
})

const DetailedInvoice=mongoose.model("DetailedInvoice",detailedInvoiceShema);
module.exports={DetailedInvoice};