'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'hljs',
    'ui.bootstrap',
    'configuration',
    'myApp.home',
    'myApp.about_me',
    'myApp.posts',
    'myApp.footballbets',
    'myApp.bachsanierung',
    'myApp.buildingMicroservices'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/home'});
}]);

myApp.config(function (hljsServiceProvider) {
    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});
