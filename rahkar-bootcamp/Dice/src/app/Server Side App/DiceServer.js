const express= require('express')
const app = express();
app.get('/',(req,res)=>res.send('Welcome To our Dice Game'))
app.listen(3000,()=>{console.log('server is listening on port 3000')})
