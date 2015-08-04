var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/sample',
  port = process.env.EXPRESS_PORT || 9001,
  seeder = require('mongoose-seed')
  birds = require('./seeds/birds.json');

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function(){
  console.log('connected at port:', port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
  console.log('db connected at:', mongoUri);
});

// seeder.connect(mongoUri, function(){
//   console.log(1111)
//   seeder.loadModels(['./models/birdModel']);
//   console.log(22222)
//   seeder.clearModels(['Birds'], function(){
//     console.log(3333)
//     seeder.populateModels([{
//       'model': 'Birds',
//       'documents': birds
//     }]);
//     console.log(4444)
//   });
// });
