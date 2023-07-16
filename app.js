const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
let bodyParser=require('body-parser');
const morgan=require('morgan');
const dotenv=require('dotenv');
const staffRouter=require("./routers/staffRouter")

const app=express();
const uri="mongodb+srv://hoangchien11522:0368670025@cluster0.hqd4zon.mongodb.net/?retryWrites=true&w=majority"

try {
    mongoose.set('strictQuery', true)
    mongoose.connect(uri,()=>{
    console.log('Mongo connected')
    })
} catch(error) {
    console.log(error)
    process.exit()
}

app.use(bodyParser.json({"limit":"50mb"}))
app.use(cors());
app.use(morgan("common"));

app.use("/v1/staff",staffRouter)

app.listen(3000,()=>{
    console.log("Server is running ...");
})