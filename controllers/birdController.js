var Bird = require('../models/birdModel');

module.exports = {

  getBirds: function(req, res){
    for(var key in req.query){
      if(key !== "scientificName"){
        req.query[key] = req.query[key].toLowerCase();
      };
    };
    Bird.find(req.query).limit(50).exec(function(err, birds){
      if(err) return res.status(500).json(err);
      if(!birds[0]){
        return res.status(400).send('no birds found');
      } else {
        return res.json(birds);
      }
    })
  },

  postBird: function(req, res){
    var newBird = new Bird(req.body);
    newBird.save(function(err, bird){
      return err ? res.status(500).json(err): res.json(bird);
    });
  },

  editBird: function(req, res){
    if(req.body._id) delete req.body._id;
    Bird.findById(req.params.id, function(err, bird){
      if(err) return res.status(500).json(err);
      if(!bird) return res.status(404).send('No bird with that id');
      for(var key in req.body){
        bird[key] = req.body[key];
      };
      bird.save(function(err, result){
        return err ? res.status(500).json(err) : res.json(result);
      });
    });
  },

  removeBird: function(req, res){
    Bird.findByIdAndRemove(req.params.id, function(err, result){
      return err ? res.status(500).json(err) : res.json(result);
    });
  }

};
