//include express ,express is pouplur web application framework for Node.js
const express = require("express");
//make an instance , something like let a:integer or etc
const app = express();
//Cross-Origin Resource Sharing this for connection between angular and server in localhost enviroment
const cors = require("cors");
const Port = 5555;
//DataBase get the client
const mysql = require('mysql2');
const blogRoute= require('./Routers/blog.route')

app.use(cors());
app.use(express.json())
//
app.use('/api',blogRoute)

app.listen(Port, () => {
  console.log(`server is Listening On Port:${Port}`);
});
