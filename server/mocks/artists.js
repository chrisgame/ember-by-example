module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  artistsRouter.get('/', function(req, res) {
    var result = {
        "artists": [{
          "id": 1,
          "name": 'roots manuva',
          "albums": [1, 2, 3, 4, 5, 6, 7]
        }]
    }
    setTimeout(function() { res.send(result) }, 2000);
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/:id', function(req, res) {
    var result;

    switch(req.params.id) {
      case '1':
        result = {
          "artist": {
            "id": req.params.id,
            "name": 'roots manuva',
            "albums": [1, 2, 3, 4, 5, 6, 7,]
          }
        };
      break;
      default:
        result = {'artist':
          {
            id: req.params.id
          }
        }
      };
    setTimeout(function() { res.send(result) }, 5000);
  });

  artistsRouter.put('/:id', function(req, res) {
    res.send({
      'artists': {
        id: req.params.id
      }
    });
  });

  artistsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/artists', artistsRouter);
};
