const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
var path = require('path');

/********* Middleware *********/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********* Start App *********/
app.use(express.static(path.join(__dirname, './public/')));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})

