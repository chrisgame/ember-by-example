module.exports = function(app) {
  var express = require('express');
  var emailUsageRouter = express.Router();

  emailUsageRouter.get('/', function(req, res) {
    res.send({
      'emailUsage': [
        {
          'messagesSent': 102,
          'messagesSentWithin1MinuteOfReading': 0,
          'messagesSentWithin1HourOfReading': 90,
          'messagesSentWithin1DayOfReading': 12,

          'messagesRecieved': 1026,
          'messagesReadWithin1MinuteOfReceipt': 0,
          'messagesReadWithin1HourOfReceipt': 20,
          'messagesReadWithin1DayOfReceipt': 912
        }
      ]
    });
  });

  app.use('/api/email-usage', emailUsageRouter);
};
