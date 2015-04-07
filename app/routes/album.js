import Em from 'ember';

export default Em.Route.extend({
  beforeModel: function(transition) {
    var albumCount = transition.resolvedModels.artist._data.albums.length;
    var requestedAlbumId = parseInt(transition.params.album.album_id);
    var idOfLastAlbum = parseInt(transition.resolvedModels.artist._data.albums[albumCount - 1].id);
    if(requestedAlbumId > idOfLastAlbum) {
      this.transitionTo('artist');
    }
  },

  model: function(params) {
    return this.store.find('album', params.album_id);
  }
});
