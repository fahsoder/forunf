const express = require('express');

// Set up the express app

const app = express();

// get user data
app.get('/api', (req, res) => {
  const baseUrl = 'graph.facebook.com';

  // chamada externa para a api

  // pega os dados e retorna para o front
  res.status(200).send({
    success: 'true',
    message: 'Add o nodemon',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
