import Em from 'ember';

export default Em.Route.extend({
  afterModel: function(){
    var emailService = this.emailService;
    var emailUsageController = this.controllerFor('emailUsage');

    Em.run.once('afterRender', function() {
      emailService.fetch()
        .then(function(result){
          emailUsageController.set('model', result.emailUsage[0]);
        },
        function(){
          return {};
        });
    });
  },
});
