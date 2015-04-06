import Em from 'ember';

export default Em.Route.extend({
  model: function(params) {
    if(params.album_id > 7) {
      this.transitionTo('artists');
    }
    return this.store.find('album', params.album_id);
  }
});
