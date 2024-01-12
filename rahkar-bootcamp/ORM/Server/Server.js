
const express = require('express');
const app = express();
const authRoutes=require('./Routes/auth.router')
const port = 3000;

app.use(express.json());
app.use('/api/auth/',authRoutes)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});