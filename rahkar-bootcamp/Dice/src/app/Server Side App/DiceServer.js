const express= require('express')
const app = express();

const users = [
  { username: 'admin', password: 'admin' },
  { username: 'player1', password: 'player1' },
  { username: 'player2', password: 'player2' }
]
app.use(express.json())
app.post('/login',(req,res)=>{
  const { username,password }=req.body 

  const foundUser=users.find(user=>user.username==username&&user.password==password)
if (foundUser){

  res.send('Login Successfuly')
}else{
    res.status(401).send('Login Faild')
  }
})

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(user => user.username === username);

  if (existingUser) {
    res.status(409).send('Username already exists');
  } else {
    const newUser = { username, password };
    users.push(newUser);
    res.send('User registered successfully!');
  }
});

app.get('/',(req,res)=>res.send('Welcome To our Dice Game'))
app.listen(3000,()=>{console.log('server is listening on port 3000')})
