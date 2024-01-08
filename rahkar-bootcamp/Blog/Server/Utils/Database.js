const mysql=require ('mysql2/promise');
  class Database {
  constructor(){
    this.connection = undefined;
    this.creatreConnection()
  }
  async creatreConnection(){ 

this.connection= await mysql.createConnection(
      {
        host:'localhost',
        user :'root',
        password:'',
        database :'blog'
      }
    )
  }
}
module.exports=new Database();