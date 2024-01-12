const express =require ("express");
const cors=require("cors")
const PORT=3333
const app=express();
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`Server is Listenning On Port ${PORT}`)
})


