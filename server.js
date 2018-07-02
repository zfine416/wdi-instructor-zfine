var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// static file setup
app.use('/', express.static(path.join(__dirname, 'public')));

// GET /favorites
// GETS the information from our servcer (data.json)
app.get('/favorites', function(req, res) {
  var data = fs.readFileSync('./data.json');
  console.log(data);
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// POST to /favorites
// POST information to our server (data.json)
app.post('/favorites', function(req, res) {
  if(!req.body.Title || !req.body.imdbID){
    res.send("Error");
    return
  }
  
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

// Set up port at 3001
app.listen(3001, function() {
  console.log("Listening on port 3001");
});

/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});