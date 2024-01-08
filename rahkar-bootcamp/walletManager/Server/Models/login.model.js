const db=require("../Utils/Database")
class  TaskModel {


    async login(data){
     
        try{
            let {name,password}=data;
            const query="SELECT * FROM Customers WHERE name=? and password=?"
            await db.connection.execute(query ,[name,password])
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