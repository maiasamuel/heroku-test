require('dotenv').config();
const express = require("express");
const port = process.env.PORT;

let app = express();

app.get('/', (req, res)=> {
  res.json({message: 'I am working!'});
});

console.log(process.env);

app.listen(Number(port), ()=> {
  console.log('Server running on port', port);
});
