import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.belongsTo('artist'),
  title: DS.attr('string'),
  tracks: DS.hasMany('track', {async:true})
});
