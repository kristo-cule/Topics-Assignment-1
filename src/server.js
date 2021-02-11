const express = require('express');

const app = express();

// simple route
app.get('/', (req, res) => {
  res.send({ message: 'Hello world!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  // do something
});
