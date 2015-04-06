import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('vanilla-route');
  this.resource('vanilla-resource');
  this.resource('artists', function() {
    this.resource('artist', { path: '/artist/:artist_id' }, function() {
      this.resource('album', { path: '/album/:album_id' }, function() {
      });
    });
  });
  this.route('dashboard');
});

export default Router;
