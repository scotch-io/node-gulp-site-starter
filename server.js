var express = require('express'),
  app = express(),
  ejs = require('ejs'),
  port = process.env.PORT || 8080;

app.use(express.static(__dirname + 'public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('../public/views/pages/index');
});

app.listen(port);
