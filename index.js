var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  mongoUri = process.env.MONGOURI || 'mongodb://localhost:27017/sample',
  port = process.env.EXPRESS_PORT || 9001,
  seeder = require('mongoose-seed'),
  birds = require('./seeds/birds.json'),
  birdCtrl = require('./controllers/birdController'),
  CronJob = require('cron').CronJob;

app.use(bodyParser.json());
app.use(cors());

app.listen(port, function(){
  console.log('connected at port:', port);
});

app.get('/api/birds', birdCtrl.getBirds);
app.post('/api/birds', birdCtrl.postBird);
app.put('/api/birds/:id', birdCtrl.editBird);
app.delete('/api/birds/:id', birdCtrl.removeBird);

// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function(){
//   console.log('db connected at:', mongoUri);
// });

seeder.connect(mongoUri, function(){
  console.log('db connected at', mongoUri);
});

var counter = 0;
var job = new CronJob('00 00 01 * * 1-7', function(){
  console.log('cron job running', counter++)
  seeder.loadModels(['./models/birdModel']);
  console.log(111)
  seeder.clearModels(['Birds'], function(){
    console.log(222)
    seeder.populateModels([{
      'model': 'Birds',
      'documents': birds
    }]);
    console.log(333)
  });
}, function(){
  console.log('db reset');
}, true);
