function logger (req,res,next){
    console.log("Welcome to logger");
    next();
}

module.exports = logger;