import Em from 'ember';

export default Em.Controller.extend({
  needs: ['email-usage', 'facebook-usage'],
  emailUsage: Em.computed.alias('controllers.email-usage'),
  facebookUsage: Em.computed.alias('controllers.facebook-usage'),

  emailUtilisation: function() {
    return this.get('emailUsage.utilisation');
  }.property('emailUsage.model'),

  facebookUtilisation: function() {
    return this.get('facebookUsage.utilisation');
  }.property('facebookUsage.model')
});
