angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tabsController.dietetics', {
    url: '/tabs/vital-stats',
    cache: false,
    public: false,
    views: {
      'tab3': {
        templateUrl: 'templates/dietetics.html',
        controller: 'dieteticsCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('tabsController.chatBot', {
    url: '/page9',
    public: false,
    views: {
      'tab5': {
        templateUrl: 'templates/chatBot.html',
        controller: 'chatBotCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('tabsController.diView', {
    url: '/page8',
    public: false,
    views: {
      'tab4': {
        templateUrl: 'templates/diView.html',
        controller: 'diViewCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('messaging', {
    url: '/page7',
    public: false,
    templateUrl: 'templates/messaging.html',
    controller: 'messagingCtrl',
    controllerAs: 'vm'
  })

  .state('subscriptions', {
    url: '/tabs/subscriptions',
    public: false,
    templateUrl: 'templates/subscriptions.html',
    controller: 'subscriptionsCtrl',
    controllerAs: 'vm'
  })

  .state('tabsController.foodBuddy', {
    url: '/tabs/food-buddy',
    public: false,
    views: {
      'tab2': {
        templateUrl: 'templates/foodBuddy.html',
        controller: 'foodBuddyCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('settings', {
    url: '/page10',
    public: false,
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl',
    controllerAs: 'vm'
  })

  .state('vitalTracker', {
    url: '/vitalTracker',
    public: false,
    templateUrl: 'templates/vitalTracker.html',
    controller: 'vitalTrackerCtrl',
    controllerAs: 'vm'
  })

  .state('mealPlanner', {
    url: '/mealPlanner',
    public: false,
    templateUrl: 'templates/mealPlanner.html',
    controller: 'mealPlannerCtrl',
    controllerAs: 'vm'
  })

   .state('profileTabs', {
    url: '/profileTabs',
    public: false,
    cache: false,
    templateUrl: 'templates/profileTabs.html',
    abstract: true
  })

  .state('profileTabs.profile', {
    url: '/profile',
    public: false,
    views: {
      'profileTabs-profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('profileTabs.password', {
    url: '/password',
    public: false,
    views: {
      'profileTabs-password': {
        templateUrl: 'templates/password.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('profileTabs.vitals', {
    url: '/vitals',
    public: false,
    views: {
      'profileTabs-vitals': {
        templateUrl: 'templates/vitals.html',
        controller: 'profileCtrl',
        controllerAs: 'vm'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    public: false,
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    public: true,
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl',
    controllerAs: 'vm'
  })

  .state('signup', {
    url: '/signup',
    public: true,
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl',
    controllerAs: 'vm'
  })

  $urlRouterProvider
    .when('/', '/login')
    .otherwise('/login')
});
