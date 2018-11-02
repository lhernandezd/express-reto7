const express = require('express');
const app = express();

//Rutas
app.get('/', (req,res) => {
  const header = req.get('User-Agent');
  res.send(`<h1>${header}</h1>`);
})

//Puerto
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});