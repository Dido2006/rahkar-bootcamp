
const User=require("../models/user")
exports.getTestData = async (req, res) => {
    console.log(req);
    try {
    let data=await User.create({
        name: req.body.name,
        mobile: req.body.mobile,
        // createdAt:new Date(),
        // updatedAt:new Date(),

    });
    // let data=await User.findAll()
    console.log(data);
      res.json(data,200);
    } catch (error) {
      res.json({message:error},400);
    }
  }
  