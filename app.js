/**
 * Created by FLY on 2016/2/8 0008.
 */

//主模块
var mainApp = angular.module('mainApp', ['ngRoute', 'listApp', 'detailApp','crawlApp','httpService']);

mainApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/search', {
                templateUrl: 'content_list/content_list.html',
                controller: 'ListController'
            }).
            when('/contentdetail', {
                templateUrl: 'content_detail/content_detail.html',
                controller: 'DetailController'
            }).
            when('/crawler',{
            	templateUrl:'crowlConfig/crawl_configuration.html',
            	controller:'crawlController'
            }).
            when('/home',{
            	templateUrl:'homePage/homePage.html',
            	controller:'crawlController'
            }).
            otherwise({redirectTo: '/home'});
    }]);


