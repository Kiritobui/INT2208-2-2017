angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.proExamA', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/proExamA.html',
        controller: 'proExamACtrl'
      }
    }
  })

  .state('cart', {
    url: '/page2',
    templateUrl: 'templates/cart.html',
    controller: 'cartCtrl'
  })

  .state('menu.forum', {
    url: '/forum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/forum.html',
        controller: 'forumCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.myProfile', {
    url: '/myprofile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myProfile.html',
        controller: 'myProfileCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signUp', {
    url: '/sign.up',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('chemistry', {
    url: '/Chemistry',
    templateUrl: 'templates/chemistry.html',
    controller: 'chemistryCtrl'
  })

  .state('hAHC12', {
    url: '/Chemistry12',
    templateUrl: 'templates/hAHC12.html',
    controller: 'hAHC12Ctrl'
  })

  .state('esteLipit', {
    url: '/Chemistry12/Este.Lipit',
    templateUrl: 'templates/esteLipit.html',
    controller: 'esteLipitCtrl'
  })

  .state('este', {
    url: '/Chemistry12/Este.Lipit/Este',
    templateUrl: 'templates/este.html',
    controller: 'esteCtrl'
  })

  .state('thiThHA', {
    url: '/TestChemistry',
    templateUrl: 'templates/thiThHA.html',
    controller: 'thiThHACtrl'
  })

  .state('ThiThS1', {
    url: '/TestChemistry1',
    templateUrl: 'templates/ThiThS1.html',
    controller: 'ThiThS1Ctrl'
  })

  .state('kTQu', {
    url: '//TestChemistry1/ket.qua',
    templateUrl: 'templates/kTQu.html',
    controller: 'kTQuCtrl'
  })

  .state('page', {
    url: '/page16',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});