const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(_dirname + './dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    app.use(express.static(__dirname + '/dist/angular-news'));
    res.sendFile(path.join(__dirname + '/dist/angular-news/index.html'));
})

console.log('Console listening!')