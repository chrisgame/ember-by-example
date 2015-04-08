import Em from 'ember';

export default Em.Route.extend({
  actions: {
    forward: function() {
      this.transitionTo('nested-resource-diagram-step-2');
    }
  }
});
