import Em from 'ember';

export default Em.Controller.extend({
  needs: [
    'email-usage',
    'facebook-usage',
    'google-plus-usage',
    'linked-in-usage',
    'twitter-usage'
  ],

  emailUsage: Em.computed.alias('controllers.email-usage'),
  facebookUsage: Em.computed.alias('controllers.facebook-usage'),
  googlePlusUsage: Em.computed.alias('controllers.google-plus-usage'),
  linkedInUsage: Em.computed.alias('controllers.linked-in-usage'),
  twitterUsage: Em.computed.alias('controllers.twitter-usage'),

  emailUtilisation: function() {
    return this.get('emailUsage.utilisation');
  }.property('emailUsage.model'),

  facebookUtilisation: function() {
    return this.get('facebookUsage.utilisation');
  }.property('facebookUsage.model'),

  googlePlusUtilisation: function() {
    return this.get('googlePlusUsage.utilisation');
  }.property('googlePlusUsage.model'),

  linkedInUtilisation: function() {
    return this.get('linkedInUsage.utilisation');
  }.property('linkedInUsage.model'),

  twitterUtilisation: function() {
    return this.get('twitterUsage.utilisation');
  }.property('twitterUsage.model')
});
