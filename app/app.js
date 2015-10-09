'use strict';

// Declare app level module which depends on views, and components
angular.module('shieldsCrApp', [
  'ngRoute',
  'shieldsCrApp.index',
  'shieldsCrApp.version'
]).
config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/index', {
        templateUrl: 'index/index.html',
        controller: 'IndexController'
      })
      .when('/', {
        templateUrl: 'index/index.html',
        controller: 'IndexController'
      })
      .otherwise({redirectTo: '/index'});
}]);
