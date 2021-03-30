const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


 app.use(express.static(__dirname + '/../public'));

app.use('', routes);
 
//for the proxy
app.use('/app.js', express.static(__dirname + '/../public/bundle.js'));

 app.listen(3003, () => {
    console.log(`listening on port 3003`);
  });