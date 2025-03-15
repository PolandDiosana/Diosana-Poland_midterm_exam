const express = require('express');
const User = require('./path/to/models/User');

const app = express();


app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching users.' });
  }
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
