const mongoose = require("mongoose");

const newsShema = new mongoose.Schema({
    idAuthor:{
        type:String,
        require: true
    },
    category:{
        type:String,
    },
    title:{
        type:String,
        require: true
    },
    imageUrl:{
        type:String,
        require: true
    },
    namePage:{
        type:String,
        require: true
    },
    iconPage:{
        type:String,
        require: true
    },
    time:{
        type:String,
        require: true
    },
    content:{
        type:String,
        require: true
    },
    like:{
        type:Boolean,
        require: true
    },
    quantityLike:{
        type:String,
        require: true
    },
    quantityComment:{
        type:String,
        require: true
    },
    favorite:{
        type:Boolean,
        require: true
    }
})
const News = mongoose.model("News", newsShema);
module.exports = { News }