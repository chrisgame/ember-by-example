import Em from 'ember';

export default Em.Route.extend({
  afterModel: function(){
    var emailService = this.emailService;
    var facebookService = this.facebookService;
    var emailUsageController = this.controllerFor('emailUsage');
    var facebookUsageController = this.controllerFor('facebookUsage');

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
  },
});
