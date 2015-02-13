import Em from 'ember';

export default Em.Controller.extend({
  needs: ['email-usage', 'facebook-usage', 'google-plus-usage'],
  emailUsage: Em.computed.alias('controllers.email-usage'),
  facebookUsage: Em.computed.alias('controllers.facebook-usage'),
  googlePlusUsage: Em.computed.alias('controllers.google-plus-usage'),

  emailUtilisation: function() {
    return this.get('emailUsage.utilisation');
  }.property('emailUsage.model'),

  facebookUtilisation: function() {
    return this.get('facebookUsage.utilisation');
  }.property('facebookUsage.model'),

  googlePlusUtilisation: function() {
    return this.get('googlePlusUsage.utilisation');
  }.property('googlePlusUsage.model')
});
