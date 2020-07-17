const app=require("express");
const morgan=require("morgan");
const cors=require("cors");
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
require("dotenv").config();
const authRoutes=require('./routes/auth');
const PORT=process.env.NODE_PORT||8000;
if(process.env.NODE_ENV==='development'){
    app.use(morgan("dev"));
}else{
    app.use(morgan("combined"));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}))
if(process.env.NODE_ENV==="development"){
    app.use(cors());
}
mongoose.connect(process.env.DATABASE_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true,
    useNewUrlParser:true,
}).then(()=>{
    app.use('/api',authRoutes);
    app.listen(PORT,()=>{
    console.log("The Server is running at Port"+PORT+)
})
}).catch((err)=>{
    console.error("Db connection failed",err);
})
