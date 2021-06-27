var express = require('express')
var app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/contribuicao', function (req, res) {
  console.log(req.body);
  res.send('hello world');
});

app.listen(9000);