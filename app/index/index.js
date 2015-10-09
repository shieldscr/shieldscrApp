'use strict';

angular.module('shieldsCrApp.index', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/index', {
    templateUrl: 'index/index.html',
    controller: 'IndexController'
  });
}])

.controller('IndexController', [function() {

}]);
