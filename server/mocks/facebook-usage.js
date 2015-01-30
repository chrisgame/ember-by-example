module.exports = function(app) {
  var express = require('express');
  var facebookUsageRouter = express.Router();

  facebookUsageRouter.get('/', function(req, res) {
    res.send({
      'facebook-usage': [
        {
          'friendsAcquiredInTheLastDay': 0,
          'friendsAcquiredInTheLastWeek': 0,
          'friendsAcquiredInTheLastMonth': 1,
          'friendsAcquiredInTheLastYear': 4,

          'hoursActiveInTheLastDay': 1,
          'hoursActiveInTheLastWeek': 2,
          'hoursActiveInTheLastMonth': 4,
          'hoursActiveInTheLastYear': 20
        }
      ]
    });
  });

  app.use('/api/facebook-usage', facebookUsageRouter);
};
