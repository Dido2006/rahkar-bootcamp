const express=require("express")
const cors=require("cors")

const savepic=require("./Routers/save.pic.router");
const loadpic=require("./Routers/load.pic.route");


const PORT=3000;

app=express();
app.use(express.json());
app.use(cors());
app.use("/images",savepic);
// app.use("/images/:title",loadpic);



app.listen(PORT,()=>{
    console.log(`it is RUNs On Port ${PORT}`);
})