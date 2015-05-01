'use strict';

var aboutMeApp = angular.module('myApp.about_me', ['ngRoute', 'hljs']);

aboutMeApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/about_me', {
        templateUrl: 'views/about_me/about_me.html',
        controller: 'EntriesCtrl'
    });
}]);

aboutMeApp.controller('EntriesCtrl', function ($scope) {
    //$('div[hljs]').each(function () {
    //    var lines, offset;
    //
    //    // split the content of the PRE element into an array of lines
    //    lines = $(this).text().split('\n');
    //
    //    // the last line is expected to be an empty line - remove it
    //    if (lines.length > 1 && lines[lines.length - 1].trim() === '') {
    //        lines.pop();
    //    }
    //
    //    // how much white-space do we need to remove form each line?
    //    offset = lines[0].match(/^\s*/)[0].length;
    //
    //    // remove the exess white-space from the beginning of each line
    //    lines = lines.map(function (line) {
    //        return line.slice(offset);
    //    });
    //
    //    // set this new content to the PRE element
    //    $(this).text(lines.join('\n'));
    //});
});