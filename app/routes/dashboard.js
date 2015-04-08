import Em from 'ember';

export default Em.Route.extend({
  emailService: Em.inject.service('email'),
  facebookService: Em.inject.service('facebook'),
  googlePlusService: Em.inject.service('google-plus'),
  linkedInService: Em.inject.service('linked-in'),
  twitterService: Em.inject.service('twitter'),

  afterModel: function(){
    var emailService = this.get('emailService');
    var facebookService = this.get('facebookService');
    var googlePlusService = this.get('googlePlusService');
    var linkedInService = this.get('linkedInService');
    var twitterService = this.get('twitterService');
    var emailUsageController = this.controllerFor('emailUsage');
    var facebookUsageController = this.controllerFor('facebookUsage');
    var googlePlusUsageController = this.controllerFor('googlePlusUsage');
    var linkedInUsageController = this.controllerFor('linkedInUsage');
    var twitterUsageController = this.controllerFor('twitterUsage');

    Em.run.once('afterRender', function() {
      emailService.fetch()
        .then(function(result){
          emailUsageController.set('model', result.emailUsage[0]);
        },
        function(){
          return {};
        });
    });

    Em.run.once('afterRender', function() {
      facebookService.fetch()
        .then(function(result){
          facebookUsageController.set('model', result.facebookUsage[0]);
        },
        function(){
          return {};
        });
    });

    Em.run.once('afterRender', function() {
      googlePlusService.fetch()
        .then(function(result){
          googlePlusUsageController.set('model', result.googlePlusUsage[0]);
        },
        function(){
          return {};
        });
    });

    Em.run.once('afterRender', function() {
      linkedInService.fetch()
        .then(function(result) {
          linkedInUsageController.set('model', result.linkedInUsage[0]);
        },
        function(){
          return {};
        });
    });

    Em.run.once('afterRender', function() {
      twitterService.fetch()
        .then(function(result) {
          twitterUsageController.set('model', result.twitterUsage[0]);
        },
        function(){
          return {};
        });
    });
  },
});
