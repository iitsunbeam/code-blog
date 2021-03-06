var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});
console.log('server started listening on port 8080!!!');
app.listen(8080);
