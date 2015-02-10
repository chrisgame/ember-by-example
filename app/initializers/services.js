export default {
  name: 'services',
  initialize: function(container, application) {
    application.inject('route:dashboard', 'emailService', 'service:email');
  }
};
