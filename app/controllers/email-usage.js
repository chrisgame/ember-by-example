import Em from 'ember';

export default Em.Controller.extend({

  utilisation: function() {
    var messagesSent = this.get('model.messagesSent');
    var messagesSentOnTime = this.get('model.messagesSentWithin1HourOfReading');
    var messagesRecieved = this.get('model.messagesRecieved');
    var messagesRecievedOnTime = this.get('model.messagesReadWithin1HourOfReceipt');
    var sendingUtilisation = (messagesSentOnTime / messagesSent) * 100;
    var recievingUtilisation = (messagesRecievedOnTime / messagesRecieved * 100);
    return (sendingUtilisation / 2) + (recievingUtilisation / 2);
  }.property('model')
});
