'use strict';

// Declare app level module which depends on views, and components
angular.module('shieldsCrApp', [
  'ngRoute',
  'shieldsCrApp.index',
  'shieldsCrApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
        templateUrl: 'index/index.html',
        controller: 'IndexController'
      })
      .when('/index', {
        templateUrl: 'index/index.html',
        controller: 'IndexController'
      })
      .otherwise({redirectTo: '/index'});
}]);
