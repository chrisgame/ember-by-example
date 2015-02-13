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
          'friendsAcquiredInTheLastYear': 2,

          'hoursActiveInTheLastDay': 0,
          'hoursActiveInTheLastWeek': 14,
          'hoursActiveInTheLastMonth': 56,
          'hoursActiveInTheLastYear': 672
        }
      ]
    });
  });

  app.use('/api/google-plus-usage', googlePlusUsageRouter);
};
