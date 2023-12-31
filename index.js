const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose')
let bodyParser=require('body-parser');
const morgan=require('morgan');
const dotenv=require('dotenv');

//router
const staffRouter=require("./routers/staffRouter");
const billRouter=require("./routers/billRouter");
const tableRouter=require("./routers/tableRouter");
const typeOfDishRouter=require('./routers/typeOfDishRouter');
const dishesRouter=require('./routers/dishesRouter')
const detailedInvoiceRouter=require('./routers/detailedInvoiceRouter');
const newsRouter=require('./routers/newsRouter')
const notificationRouter=require('./routers/notificationRouter');
const tokenRouter=require('./routers/tokenRouter');


const PORT=process.env.PORT||3000;

const app=express();
const uri="mongodb+srv://hoangchien11522:0368670025@cluster0.hqd4zon.mongodb.net/test?retryWrites=true&w=majority"

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

app.use("/staff",staffRouter);
app.use("/bill",billRouter);
app.use('/table',tableRouter);
app.use('/typeOfDish',typeOfDishRouter);
app.use('/dishes',dishesRouter);
app.use('/detailedInvoice',detailedInvoiceRouter);
app.use('/notification',notificationRouter);
app.use('/article',newsRouter)





app.listen(PORT,()=>{
    console.log("Server is running ...");
})
