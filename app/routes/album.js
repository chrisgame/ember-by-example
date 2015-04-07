import Em from 'ember';

export default Em.Route.extend({
  beforeModel: function(transition) {
    if(transition.state.params.album.album_id > 7) {
      this.transitionTo('artist');
    }
  },

  model: function(params) {
    return this.store.find('album', params.album_id);
  }
});
