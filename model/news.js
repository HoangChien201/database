const mongoose = require("mongoose");

const newsShema = new mongoose.Schema({
    idAuthor:{
        typeof:String
    },
    category:{
        typeof:String,
    },
    title:{
        typeof:String
    },
    imageUrl:{
        typeof:String
    },
    namePage:{
        typeof:String
    },
    iconPage:{
        typeof:String
    },
    time:{
        typeof:String
    },
    content:{
        typeof:String
    },
    like:{
        typeof:Boolean
    },
    quantityLike:{
        typeof:String
    },
    quantityComment:{
        typeof:String
    },
    favorite:{
        typeof:Boolean
    }
})
const News = mongoose.model("News", newsShema);
module.exports = { News }