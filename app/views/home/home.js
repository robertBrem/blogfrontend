'use strict';

var entriesApp = angular.module('myApp.home', ['ngRoute', 'configuration']);

entriesApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'EntriesCtrl'
    });
}]);

entriesApp.controller('EntriesCtrl', function ($scope, $http, ENTRY_URL) {

    $http.get(ENTRY_URL).then(function (response) {
        $scope.entries = response.data;
    });

});