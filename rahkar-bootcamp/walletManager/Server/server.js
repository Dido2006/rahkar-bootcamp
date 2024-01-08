//include express ,express is pouplur web application framework for Node.js
const express = require("express");
//make an instance , something like let a:integer or etc
const app = express();
//Cross-Origin Resource Sharing this for connection between angular and server in localhost enviroment
const cors = require("cors");
const Port = 4600;
//DataBase get the client
const mysql = require('mysql2');
const taskRoute= require('./Routers/task.routes')
app.use(cors());
app.use(express.json())


// app.post("/", (req, res) => {
//   const body = req.body
//   res.json(body)
// })
app.use('/api/task',taskRoute)
app.use('/api/login',loginRoute)
// app.post("/api/login", (req, res) => {
//   const data = req.body; // Retrieve the data from the request body
//   users=data
//   res.json(data); // Send the data as the response
 
// });



app.listen(Port, () => {
  console.log(`server is Listening On Port:${Port}`);
});
