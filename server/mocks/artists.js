module.exports = function(app) {
  var express = require('express');
  var artistsRouter = express.Router();

  artistsRouter.get('/', function(req, res) {
    res.send({
      'artists': [
        {
          id: 1,
          name: 'roots manuva'
        },
        {
          id: 2,
          name: 'dave'
        }
      ]
    });
  });

  artistsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  artistsRouter.get('/:id', function(req, res) {
    res.send({
      'artists': {
        id: req.params.id
      }
    });
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
