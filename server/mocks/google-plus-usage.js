module.exports = function(app) {
  var express = require('express');
  var googlePlusUsageRouter = express.Router();

  googlePlusUsageRouter.get('/', function(req, res) {
    res.send({
      'googlePlusUsage': [
        {
          'friendsAcquiredInTheLastDay': 0,
          'friendsAcquiredInTheLastWeek': 0,
          'friendsAcquiredInTheLastMonth': 0,
          'friendsAcquiredInTheLastYear': 0,

          'hoursActiveInTheLastDay': 2,
          'hoursActiveInTheLastWeek': 4,
          'hoursActiveInTheLastMonth': 8,
          'hoursActiveInTheLastYear': 40
        }
      ]
    });
  });

  app.use('/api/google-plus-usage', googlePlusUsageRouter);
};
