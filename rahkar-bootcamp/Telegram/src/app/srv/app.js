// const http=require('http')
// const PORT=3000
// let server = http.createServer((req,res)=>{
//     res.statusCode=200;
//  //   res.setHeader('Content-type','text/plain')
//       res.setHeader('Content-type','application/json')
//     var data={
//         massage:'salam'
//     }
//     res.end(JSON.straingify)
//    // res.end('salam bootcamp')
// })

// server.listen(PORT,()=>{
//     console.log('is ok');
// })
// const { log } = require('@angular-devkit/build-angular/src/builders/ssr-dev-server');
const express=require('express');
const cors=require('cors');
const bodyParser = require('body-parser');
const app =express();

//const logger =()
function logger(req,res,next){
  console.log("logger");
  next();
}
function errorHandler(req,res,next){
  console.log("logger");
  next();
}
app.use(cors());
app.use((req,res, next) => {

  console.log('request incoming');
  next()
})
app.get('/',(req, res)=>{
    var data={
        massage:"hello"
    }
    res.json(data)
    })

      app.listen(4000,()=>{
        console.log('is ok');
    })

