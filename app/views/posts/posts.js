'use strict';

var entriesApp = angular.module('myApp.posts', ['ngRoute', 'configuration']);

entriesApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/posts/:id', {
        templateUrl: 'views/posts/posts.html',
        controller: 'PostsCtrl'
    });
}]);

entriesApp.controller('PostsCtrl', function ($scope, $http, $routeParams, ENTRY_URL) {
    $http.get(ENTRY_URL + $routeParams.id).then(function (response) {
        $scope.entry = response.data;
    });
});