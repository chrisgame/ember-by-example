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
            title: 'Brand New Second Hand',
            tracks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
          }
        }
      break;
      case '11':
        result = {'album':
          {
            id: 11,
            title: 'Run Come Save Me',
            tracks: [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
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
