import Em from 'ember';

export default Em.Object.extend({

  fetch: function() {
    return new Em.RSVP.Promise(function(res, rej){
      Em.$.ajax({
        type: 'GET',
        url: '/api/email-usage',
        success: function(result) {
          res(result);
        },
        failure: function() {
          rej({emailUsage: [{}]});
        }
      });
    });
  }
});
