const db=require("../Utils/Database")
class  TaskModel {


    async addTask(task){
        console.log(task);
        try{
            let {taskTitle}=task;
            const query="insert into shoppinglist (taskTitle) values(?)"
            await db.connection.execute(query ,[taskTitle])
            return true
            // let {taskTitle}=task;
            // const query="insert into shoppinglist (task) values(?)"
            // await db.connection.execute(query,[taskTitle])
            // return true

        }catch(error){
            console.log(error);
            throw new error("خطا در انجام عملیات")
            
        }
    }

}
module.exports = new TaskModel();