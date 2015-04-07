import Em from 'ember';

export default Em.View.extend({
  click: function(event) {
    this.get('controller').send('forward');
  }
});
