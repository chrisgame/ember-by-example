import Em from 'ember';

export default Em.Controller.extend({

  utilisation: function() {
    var friendsInLastDay = this.get('model.friendsAcquiredInTheLastDay');
    var friendsInLastWeek = this.get('model.friendsAcquiredInTheLastWeek');
    var friendsInLastMonth = this.get('model.friendsAcquiredInTheLastMonth');
    var friendsInLastYear = this.get('model.friendsAcquiredInTheLastYear');
    var activityInLastDay = this.get('model.hoursActiveInTheLastDay');
    var activityInLastWeek = this.get('model.hoursActiveInTheLastWeek');
    var activityInLastMonth = this.get('model.hoursActiveInTheLastMonth');
    var activityInLastYear = this.get('model.hoursActiveInTheLastYear');

    var utilisationInLastDay = (activityInLastDay * friendsInLastDay);
    var utilisationInLastWeek = (activityInLastWeek * friendsInLastWeek);
    var utilisationInLastMonth = (activityInLastMonth * friendsInLastMonth);
    var utilisationInLastYear = (activityInLastYear * friendsInLastYear);

    var utilisation = Math.min((
      (utilisationInLastDay * 100) +
      (utilisationInLastWeek * 50) +
      (utilisationInLastMonth * 10) +
      (utilisationInLastYear)
      )/10, 100);

    return utilisation;
  }.property('model')
});
