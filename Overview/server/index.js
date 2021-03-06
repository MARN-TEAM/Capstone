const express = require('express');
const bodyParser = require('body-parser');
var routes = require('./routes')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/app.js',express.static(__dirname + '/../public/bundle.js'));
 app.use(express.static(__dirname + '/../public'));

 app.use('',routes)

 app.listen(3001, () => {
    console.log(`listening on port 3001`);
  })