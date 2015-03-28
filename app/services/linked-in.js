import Em from 'ember';

export default Em.Object.extend({

  fetch: function() {
    return new Em.RSVP.Promise(function(req, rej){
      Em.$.ajax({
        method: 'GET',
        url: '/api/linked-in-usage',
        type: 'text/json',
        success: function(result) {
          req(result);
        },
        failure: function() {
          rej ({linkedInUsage: [{}]});
        }
      });
    });
  }
});
