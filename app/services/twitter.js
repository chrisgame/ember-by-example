import Em from 'ember';

export default Em.Object.extend({
  fetch: function() {
    return new Em.RSVP.Promise(function(res,rej){
      Em.$.ajax({
        method: 'GET',
        url: 'api/twitter-usage',
        type: 'text/json',
        success: function(result) {
          res(result);
        },
        failure: function() {
          rej({twitterUsage: [{}]});
        }
      });
    });
  }
});
