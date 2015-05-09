'use strict';

var footballbetsApp = angular.module('myApp.footballbets', ['ngRoute', 'configuration']);

footballbetsApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/footballbets', {
        templateUrl: 'views/footballbets/footballbets.html',
        controller: 'FootballbetsCtrl'
    });
}]);

footballbetsApp.controller('FootballbetsCtrl', function ($scope, $http, ENTRY_URL) {

});