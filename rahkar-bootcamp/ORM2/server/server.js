const express=require("express");
const cors=require("cors");
const PORT=3450
const app=express();
app.use(cors());
app.use(express.json());
//  app.use("/api/",router)


app.listen(PORT,()=>{
    console.log(`Server is listening OnPort ${PORT}`)
})