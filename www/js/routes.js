angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dietetics', {
    url: '/tabs/vital-stats',
    views: {
      'tab3': {
        templateUrl: 'templates/dietetics.html',
        controller: 'dieteticsCtrl'
      }
    }
  })

  .state('tabsController.chatBot', {
    url: '/page9',
    views: {
      'tab5': {
        templateUrl: 'templates/chatBot.html',
        controller: 'chatBotCtrl'
      }
    }
  })

  .state('tabsController.diView', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/diView.html',
        controller: 'diViewCtrl'
      }
    }
  })

  .state('messaging', {
    url: '/page7',
    templateUrl: 'templates/messaging.html',
    controller: 'messagingCtrl'
  })

  .state('subscriptions', {
    url: '/tabs/subscriptions',
    templateUrl: 'templates/subscriptions.html',
    controller: 'subscriptionsCtrl'
  })

  .state('tabsController.foodBuddy', {
    url: '/tabs/food-buddy',
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
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page11',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page12',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/page1/page9')

  

});