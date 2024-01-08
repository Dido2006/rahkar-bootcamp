const { catchError } = require('rxjs')
const login=require('../Models/task.model')
exports.addtask=async(req,res)=>{
    try{
        // console.log(req.body);
        let qurey = await TaskModel.addTask({taskTitle: "asdfg"})
        res.json({massage:'successful'},200)
    }
    catch(Error)
    {
        res.json({massage:'error'},400)
    }
}
