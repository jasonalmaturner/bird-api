var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/sample',
  port = process.env.EXPRESS_PORT || 9001;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function(){
  console.log('connected at port:', port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('db connected at:', mongoUri);
})
