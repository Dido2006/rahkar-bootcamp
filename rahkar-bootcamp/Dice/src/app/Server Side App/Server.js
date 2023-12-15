
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.get('/api/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.post('/api/users', (req, res) => {
  const { id, name } = req.body;
  const user = { id, name };
  users.push(user);
  res.json(user);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});