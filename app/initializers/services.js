export default {
  name: 'services',
  initialize: function(container, application) {
    application.inject('route:dashboard', 'emailService', 'service:email');
    application.inject('route:dashboard', 'facebookService', 'service:facebook');
    application.inject('route:dashboard', 'googlePlusService', 'service:google-plus');
  }
};
