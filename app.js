/**
 * Created by FLY on 2016/2/8 0008.
 */

//主模块
var mainApp = angular.module('mainApp', ['ngRoute', 'listApp', 'detailApp','httpService']);

mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/contentList', {
                templateUrl: 'content_list/content_list.html',
                controller: 'ListController'
            }).
            when('/contentDetail', {
                templateUrl: 'content_detail/content_detail.html',
                controller: 'DetailController'
            }).
            otherwise({redirectTo: '/contentList'});
    }]);


