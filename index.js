const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const fetch = require('node-fetch')


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


app.get('/', (req,res) => {
  res.send('Hello World')
})

app.get('/express-backend', (req,res) => {
  res.send({
    express: 'Express backend is now connected to React frontend!'
  })
})


app.get('/release-notes', (req,res) => {
  fetch("https://api.github.com/gists/e1ba853679250a021dc7ecaeab661c95")
    .then(res => res.json())
    .then(data => res.send(data))
})


// PORT
const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on port ${port}`))


module.exports = app;
