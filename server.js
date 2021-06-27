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

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));