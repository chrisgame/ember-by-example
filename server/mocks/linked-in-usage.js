module.exports = function(app) {
  var express = require('express');
  var linkedInUsageRouter = express.Router();

  linkedInUsageRouter.get('/', function(req, res) {
    res.send({
      'linked-in-usage': [
        {
          'connectionsMadeInTheLastDay': 0,
          'connectionsMadeInTheLastWeek': 0,
          'connectionsMadeInTheLastMonth': 0,
          'connectionsMadeInTheLastYear': 3,

          'hoursActiveInTheLastDay': 2,
          'hoursActiveInTheLastWeek': 4,
          'hoursActiveInTheLastMonth': 8,
          'hoursActiveInTheLastYear': 40
        }
      ]
    });
  });

  app.use('/api/linked-in-usage', linkedInUsageRouter);
};
