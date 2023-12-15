const express = require('express');
const app = express();
const BookRoutes = require("./routes/bookRoute")
const logger = require('./logger');



app.use(express.json())
app.use('/api/book', BookRoutes)
// app.listen(3333, () => {
//     console.log("OKKK")
// })
//const port 4000;

// app.get('/login',[logger], (req, res) => {
//   res.json({ message: 'سلام' });
// });

// app.get('/logout',[logger],(req, res) => {
//     res.json({ message: 'خداحافظ' });
//   });


app.listen(4000, () => {
    console.log(`Server listening on port 4000`);
  });
 
// function getdata(data,res,next){
//     if (data)res.json({data})
//     next();
// }

