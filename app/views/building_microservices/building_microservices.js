'use strict';

var buildingMicroservicesApp = angular.module('myApp.buildingMicroservices', ['ngRoute', 'configuration']);

buildingMicroservicesApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/building_microservices', {
        templateUrl: 'views/building_microservices/building_microservices.html',
        controller: 'BuildingMicroservicesCtrl'
    });
}]);

buildingMicroservicesApp.controller('BuildingMicroservicesCtrl', function ($scope, $http, ENTRY_URL) {


});