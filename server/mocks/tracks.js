module.exports = function(app) {
  var express = require('express');
  var tracksRouter = express.Router();

  tracksRouter.get('/', function(req, res) {
    res.send({
      'tracks': []
    });
  });

  tracksRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tracksRouter.get('/:id', function(req, res) {
    var result;
    switch(req.params.id) {
      case '1':
        result = {'track':
          {
            id: 1,
            position: 1,
            name: 'Movements',
            duration: 252
          }
        }
      break;
      case '2':
        result = {'track':
          {
            id: 2,
            position: 2,
            name: 'Dem Phonies',
            duration: 266
          }
        }
      break;
      case '3':
        result = {'track':
          {
            id: 3,
            position: 3,
            name: 'Juggle Tings Proper',
            duration: 304
          }
        }
      break;
      case '4':
        result = {'track':
          {
            id: 4,
            position: 4,
            name: 'Inna',
            duration: 271
          }
        }
      break;
      case '5':
        result = {'track':
          {
            id: 5,
            position: 5,
            name: 'Soul Decay',
            duration: 229
          }
        }
      break;
      case '6':
        result = {'track':
          {
            id: 6,
            position: 6,
            name: 'Baptism',
            duration: 261
          }
        }
      break;
      case '7':
        result = {'track':
          {
            id: 7,
            position: 7,
            name: 'Strange Behaviour',
            duration: 232
          }
        }
      break;
      case '8':
        result = {'track':
          {
            id: 8,
            position: 8,
            name: 'Organ Skit',
            duration: 16
          }
        }
      break;
      case '9':
        result = {'track':
          {
            id: 9,
            position: 9,
            name: 'Big Tings Gwidarn',
            duration: 282
          }
        }
      break;
      case '10':
        result = {'track':
          {
            id: 10,
            position: 10,
            name: 'Sinking Sands',
            duration: 250
          }
        }
      break;
      case '11':
        result = {'track':
          {
            id: 11,
            position: 11,
            name: 'Wisdom Fall',
            duration: 190
          }
        }
      break;
      case '12':
        result = {'track':
          {
            id: 12,
            position: 12,
            name: 'Roots-Fi Discotheque Skit',
            duration: 31
          }
        }
      break;
      case '13':
        result = {'track':
          {
            id: 13,
            position: 13,
            name: 'Clockwork',
            duration: 237
          }
        }
      break;
      case '14':
        result = {'track':
          {
            id: 14,
            position: 14,
            name: 'Cornmeal Dumpling',
            duration: 327
          }
        }
      break;
      case '15':
        result = {'track':
          {
            id: 15,
            position: 15,
            name: 'Fever',
            duration: 240
          }
        }
      break;
      case '16':
        result = {'track':
          {
            id: 16,
            position: 16,
            name: 'Oh Yeah...',
            duration: 198
          }
        }
      break;
      case '17':
        result = {'track':
          {
            id: 17,
            position: 17,
            name: 'Motion 5000',
            duration: 311
          }
        }
      break;
    };
    res.send(result);
  });

  tracksRouter.put('/:id', function(req, res) {
    res.send({
      'tracks': {
        id: req.params.id
      }
    });
  });

  tracksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tracks', tracksRouter);
};
