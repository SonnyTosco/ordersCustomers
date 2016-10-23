var express     = require('express'),
    path        = require('path'),
    bodyParser  = require('body-parser'),
    app         = express();

app.use(express.static(path.join(__dirname, "./client")));
app.use(bodyParser.json());

app.listen(8000, function(){
  console.log('Orders and Customers on port 8000');
})
