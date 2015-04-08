import Em from 'ember';

export default Em.Route.extend({
  actions: {
    back: function() {
      this.transitionTo('nested-resource-diagram');
    }
  }
});
