const { catchError } = require('rxjs')
const TaskModel=require('../Models/task.model')
exports.addtask=async(req,res)=>{
    try{
        // console.log(req.body);
        let result = await TaskModel.addTask({taskTitle: "asdfg"})
        res.json({massage:'successful'},200)
    }
    catch(Error)
    {
        res.json({massage:'error'},400)
    }
}
