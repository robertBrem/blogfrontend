'use strict';

var bachsanierungApp = angular.module('myApp.bachsanierung', ['ngRoute', 'configuration']);

bachsanierungApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/bachsanierung', {
        templateUrl: 'views/bachsanierung/bachsanierung.html',
        controller: 'BachsanierungCtrl'
    });
}]);

bachsanierungApp.controller('BachsanierungCtrl', function ($scope, $http, ENTRY_URL) {


});