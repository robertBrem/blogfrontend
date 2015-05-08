'use strict';

var aboutMeApp = angular.module('myApp.about_me', ['ngRoute', 'hljs']);

aboutMeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about_me', {
        templateUrl: 'views/about_me/about_me.html',
        controller: 'AboutMeCtrl'
    });
}]);

aboutMeApp.controller('AboutMeCtrl', function ($scope) {

});