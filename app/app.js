'use strict';

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngSanitize',
    'hljs',
    'configuration',
    'myApp.home',
    'myApp.about_me',
    'myApp.posts'
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
