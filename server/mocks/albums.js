module.exports = function(app) {
  var express = require('express');
  var albumsRouter = express.Router();

  albumsRouter.get('/', function(req, res) {
    res.send({
      'albums': []
    });
  });

  albumsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  albumsRouter.get('/:id', function(req, res) {
    var result;

    switch(req.params.id) {
      case '10':
        result = {'album':
          {
            id: 10,
            title: 'Brand New Second Hand'
          }
        }
      break;
      case '11':
        result = {'album':
          {
            id: 11,
            title: 'Run Come Save Me'
          }
        }
      break;
      case '12':
        result = {'album':
          {
            id: 12,
            title: 'Dub Come Save Me'
          }
        }
      break;
      case '13':
        result = {'album':
          {
            id: 13,
            title: 'Awfully Deep'
          }
        }
      break;
      case '14':
        result = {'album':
          {
            id: 14,
            title: 'Slime & Reason'
          }
        }
      break;
      case '15':
        result = {'album':
          {
            id: 15,
            title: 'Duppy Writer'
          }
        }
      break;
      case '16':
        result = {'album':
          {
            id: 16,
            title: '4everevolution'
          }
        }
      break;
      default:
        result = {'album':
          {
            id: req.params.id
          }
        }
    };
    res.send(result);
  });

  albumsRouter.put('/:id', function(req, res) {
    res.send({
      'albums': {
        id: req.params.id
      }
    });
  });

  albumsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/albums', albumsRouter);
};
