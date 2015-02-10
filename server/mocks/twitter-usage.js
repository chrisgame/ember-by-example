module.exports = function(app) {
  var express = require('express');
  var twitterUsageRouter = express.Router();

  twitterUsageRouter.get('/', function(req, res) {
    res.send({
      'twitterUsage': [
        {
          'tweetsSent': 24,

          'followersAcquiredInTheLastDay': 0,
          'followersAcquiredInTheLastWeek': 0,
          'followersAcquiredInTheLastMonth': 0,
          'followersAcquiredInTheLastYear': 1,

          'hoursActiveInTheLastDay': 2,
          'hoursActiveInTheLastWeek': 4,
          'hoursActiveInTheLastMonth': 8,
          'hoursActiveInTheLastYear': 40
        }
      ]
    });
  });

  app.use('/api/twitter-usage', twitterUsageRouter);
};
