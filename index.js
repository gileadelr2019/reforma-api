const express = require('express');

const app = express();
/*
app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));
*/

var cors = require('cors');

app.use(cors());

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    var arrecadado = 4500;
    var meta = 6000;
    var percentualArrecadado = arrecadado/meta * 100;
    res.send({"arrecadado" : arrecadado, "meta" : meta, "percentualArrecadado" : percentualArrecadado});
});

app.post('/contribuicao', function (req, res) {
  console.log(req.body.responsavel);
  res.send('hello world');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));