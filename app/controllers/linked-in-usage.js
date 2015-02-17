import Em from 'ember';

export default Em.Controller.extend({

  utilisation: function() {
    var connectionsInLastDay = this.get('model.connectionsMadeInTheLastDay');
    var connectionsInLastWeek = this.get('model.connectionsMadeInTheLastWeek');
    var connectionsInLastMonth = this.get('model.connectionsMadeInTheLastMonth');
    var connectionsInLastYear = this.get('model.connectionsMadeInTheLastYear');
    var activityInLastDay = this.get('model.hoursActiveInTheLastDay');
    var activityInLastWeek = this.get('model.hoursActiveInTheLastWeek');
    var activityInLastMonth = this.get('model.hoursActiveInTheLastMonth');
    var activityInLastYear = this.get('model.hoursActiveInTheLastYear');

    var utilisationInLastDay = (activityInLastDay * connectionsInLastDay);
    var utilisationInLastWeek = (activityInLastWeek * connectionsInLastWeek);
    var utilisationInLastMonth = (activityInLastMonth * connectionsInLastMonth);
    var utilisationInLastYear = (activityInLastYear * connectionsInLastYear);

    var utilisation = Math.min((
      (utilisationInLastDay * 100) +
      (utilisationInLastWeek * 50) +
      (utilisationInLastMonth * 10) +
      (utilisationInLastYear)
      )/10, 100);

    return utilisation;
  }.property('model')
});
