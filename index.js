// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var accepts = require('accepts');
var useragent = require('useragent');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// API endpoint
app.get('/api/whoami', function(req, res) {
  var ip = req.ip; // Get user's IP address from request header
  var language = accepts(req).languages()[0]; // Get user's preferred language from 'Accept-Language' header

  // Get user's software info from 'User-Agent' header
  var agent = useragent.parse(req.headers['user-agent']);
  var software = agent.toString();

  // Send JSON response with IP, language, and software details
  res.json({ ipaddress: ip, language: language, software: software });
});

// listen for requests
var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
