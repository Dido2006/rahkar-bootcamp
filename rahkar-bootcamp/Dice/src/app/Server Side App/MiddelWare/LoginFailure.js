function LoginFailure (req,res,next){
    console.log("Bad Combination of User Name and Password");
    next();
}
module.exports = LoginFailure;