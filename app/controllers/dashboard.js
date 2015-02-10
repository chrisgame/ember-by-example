import Em from 'ember';

export default Em.Controller.extend({
  needs: ['email-usage'],
  emailUsage: Em.computed.alias('controllers.email-usage'),

  emailUtilisation: function() {
    return this.get('emailUsage.utilisation');
  }.property('emailUsage.model')
});
